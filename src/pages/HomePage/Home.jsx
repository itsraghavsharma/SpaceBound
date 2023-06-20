import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Information from '../../Components/Information';
import GameComponent from '../../Components/GameComponent';
import Directions from '../../Components/Directions';

import { auth, db, provider } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import {TeamData, teamDataConverter } from '../../models/UserModel';
import Team from '../../Components/team';


function Home() {
  const [message, setMessage] = useState('Loading...');
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const storedTeamData = localStorage.getItem('teamData');
    if (storedTeamData) {
        console.log("storedTeamData");
        console.log(storedTeamData);
      const parsedTeamData = JSON.parse(storedTeamData);
      setTeamData(parsedTeamData);
    //   localStorage.removeItem('teamData'); // Remove the stored teamData from localStorage after retrieval
    } 

    const fetchMessage = async () => {
       
      try {
        const user = auth.currentUser;
        console.log(auth.currentUser);
        if (user) {
        
          const docRef = doc(db, 'users', user.email);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
           
            const userData = docSnap.data();
            const messageFromFirestore = userData.message;
            console.log(messageFromFirestore);
            setMessage(messageFromFirestore);
          } else {
            setMessage('Failed');
          }
        }
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, []);


  return (
    <div>
      <Navbar name={teamData?.teamName ?? ""}/>
      <Information message={message} />
      <GameComponent />
      <Directions />
      <Team teammates = {teamData?.teamMembers ?? ""} id = {teamData?.teamId}/>
    </div>
  );
}

export default Home;
