import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Information from '../../Components/Information';
import GameComponent from '../../Components/GameComponent';
import Directions from '../../Components/Directions';

import { auth, db } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Team from '../../Components/team';
import { taskDataConverter } from '../../models/TasksModel';
import { teamDataConverter } from '../../models/UserModel';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
  const [message, setMessage] = useState('Loading...');
  const [teamData, setTeamData] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [gamePosition, setGamePosition] = useState('1');
  const [pos, setPos] = useState(0);

  const updateGamePosition = (newState) => {
    setGamePosition(newState);
  };

  useEffect(() => {
    const updateData = async () => {

      const docRef = doc(db, "users", auth.currentUser.email).withConverter(teamDataConverter);
      const docSnap = await getDoc(docRef);
      

      
      if (docSnap.exists) {
      
        setTeamData(docSnap.data());
        setGamePosition(docSnap.data().currentPosition);
        setPos(parseInt(docSnap.data().currentPosition));
        console.log("pos is " + pos);
        // localStorage.removeItem('teamData'); // Remove the stored teamData from localStorage after retrieval
      }
      else
      {
        navigate('/login');
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
          } else {
            setMessage('Failed');
          }
        }
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, [gamePosition]);

  return (
    <div>
      <Navbar name={teamData?.teamName ?? ""} />
      <Information message={message} />
      {((pos!=0 || pos != null)) ?
      <GameComponent onUpdateState={updateGamePosition} pos={pos} /> : null}
      <Directions />
      <Team teammates={teamData?.teamMembers ?? ""} id={teamData?.teamId} />
    </div>
  );
}

export default Home;
