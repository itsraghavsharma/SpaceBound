import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Information from '../../Components/Information';
import GameComponent from '../../Components/GameComponent';
import Directions from '../../Components/Directions';

import { auth, db, provider } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Team from '../../Components/team';
import { taskDataConverter } from '../../models/TasksModel';


function Home() {
  const [message, setMessage] = useState('Loading...');
  const [teamData, setTeamData] = useState(null);
  const [currentTast, setCurrentTast] = useState(null);
  const [gamePosition, setGamePosition] = useState('1');

  const updateGamePosition = (newState) => {
    setGamePosition(newState);
  };

  useEffect(() => {
    const storedTeamData = localStorage.getItem('teamData');
    if (storedTeamData) {

        // console.log(storedTeamData);
      const parsedTeamData = JSON.parse(storedTeamData);
      setTeamData(parsedTeamData);
    //   localStorage.removeItem('teamData'); // Remove the stored teamData from localStorage after retrieval
    } 

    const fetchMessage = async () => {
       
      try {
        const user = auth.currentUser;
        if (user) {

          const docRef = doc(db, 'tasks', gamePosition.toString()).withConverter(taskDataConverter);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {

            setCurrentTast(docSnap.data());
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
      <Navbar name={teamData?.teamName ?? ""}/>
      <Information message={message} />
      <GameComponent onUpdateState={updateGamePosition} />
      <Directions />
      <Team teammates = {teamData?.teamMembers ?? ""} id = {teamData?.teamId}/>
    </div>
  );
}

export default Home;
