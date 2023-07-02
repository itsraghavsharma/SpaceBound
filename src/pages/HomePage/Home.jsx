import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Information from '../../Components/Information';
import GameComponent from '../../Components/GameComponent';
import Directions from '../../Components/Directions';

import { auth, db } from '../../services/firebase';
import { addDoc, doc, getDoc , updateDoc} from 'firebase/firestore';
import Team from '../../Components/team';
import { taskDataConverter } from '../../models/TasksModel';
import { teamDataConverter } from '../../models/UserModel';
import { useNavigate } from 'react-router-dom';
import Body from '../../Components/GameComponent';


function Home() {
    const navigate = useNavigate();
  const [message, setMessage] = useState('Loading...');
  const [teamData, setTeamData] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [gamePosition, setGamePosition] = useState('1');
  const [pos, setPos] = useState(0);

  const updateGamePosition = (newState) => {
    setGamePosition(newState);
    console.log("Game State Updated");
  };

  useEffect(() => {
    const updateData = async () => {

      const docRef = doc(db, "users", auth.currentUser.email).withConverter(teamDataConverter);
      const docSnap = await getDoc(docRef);
      

      
      if (docSnap.exists) {
        if(docSnap.data().startQu != true){
          navigate('/start')
          return
        }
        setTeamData(docSnap.data());
        setGamePosition(docSnap.data().currentPosition);
        setPos(parseInt(docSnap.data().currentPosition));
        console.log("pos is " + pos);
        // localStorage.removeItem('teamData'); // Remove the stored teamData from localStorage after retrieval
      }
      else
      {
        
        navigate('/');
      }
    };

    updateData();
  }, []);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, 'tasks', gamePosition.toString()).withConverter(taskDataConverter);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setCurrentTask(docSnap.data());
            console.log(docSnap.data());
            setMessage(docSnap.data().message);
            if(docSnap.data().position != 0)
            {
              try {
                const user = auth.currentUser;
                if (user) {
                  const userDocRef = doc(db, 'users', user.email);
                  const newPos = parseInt(gamePosition) + docSnap.data().position;
                  setGamePosition(newPos);
                  setPos(newPos);
                  alert("You are shifted " + docSnap.data().position + " steps to " + newPos + "\n\nMessage :" + docSnap.data().message);
                  await updateDoc(userDocRef, { currentPosition: newPos });
                  const timestamp = Date.now();
                  const formattedDate = new Date(timestamp).toLocaleString();
                  
                  console.log("Date is " + formattedDate);
                  const data = new Map();
                  data.set(gamePosition, formattedDate);
                  data.set("isVerified", false); // Add the "isVerified" field
                  
                  await updateDoc(userDocRef, Object.fromEntries(data));
                  

                  console.log('Position updated in Firestore');
                }
              
              
                } catch (error) {
                console.error('Error updating position:', error);
              }
            };
             
            }
            
          } else {
            setMessage('Failed');
          }
        }
       catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, [gamePosition]);

  const divStyle = {
    backgroundImage: 'url("./images/bg.jpg")',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };

  return (
    <div style={divStyle}>
      <Navbar name={teamData?.teamName ?? ""} />
      <br />
      <button
          type="button"
          className="btn btn"
          style={{marginTop: '70px',alignItems:"center", width: '50vw', height: 'auto', margin:0, borderRadius: "25px", fontWeight: 'bold', color:"#0B5ED7", backgroundColor:"white" }}
        >
          <a className="navbar-brand" href="#" style={{ color: "#0B5ED7", fontWeight: 'bold',fontSize: '2rem'  }}>
            ऐlaan
          </a>
        </button>
      <Information message={message} />
      {((pos!=0 || pos != null)) ?
      <GameComponent onUpdateState={updateGamePosition} pos={pos} /> : null}
      <Team teammates={teamData?.teamMembers ?? ""} id={teamData?.teamId} />
    </div>
  );
}

export default Home;
