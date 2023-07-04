import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { doc, updateDoc } from 'firebase/firestore';


const GameComponent = ({onUpdateState, pos}) => {
 
  const [number, setNumber] = useState(1);
  const [verifyDisabled, setVerifyDisabled] = useState(true);
  const [diceDisabled, setDiceDisabled] = useState(false);
  const [verifyButtonText, setVerifyButtonText] = useState('Verified');

  const play = () => {
    setNumber(2);
  };
  useEffect(() => {
    setNumber(pos);
  }, [pos]);


  const unlockButton = () =>{
    var inpCode = prompt("Enter Volunteer Only Code : ", "")
     if (inpCode === "6969"){
      setDiceDisabled(false);
      setVerifyButtonText('Verified !');
      setVerifyDisabled(true);
     }
     else{
       alert("Wrong Code! If you are a team member attempting to unlock this, it will result in your team's disqualification next time")
     }
   }

  const random = async () => {
    const diceValues = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const diceRoll = Math.ceil(Math.random() * 6);

    const newNumber = number + diceRoll <= 78 ? number + diceRoll : number;


    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.email);
        await updateDoc(userDocRef, { currentPosition: newNumber });
        console.log('Position updated in Firestore');
        const updatedNumber = newNumber; // Store the updated value in a separate variable
        setNumber(updatedNumber);
        onUpdateState(updatedNumber);
        document.getElementById('dice').innerHTML = diceValues[diceRoll];
        setDiceDisabled(true);
        setVerifyDisabled(false);
        setVerifyButtonText("Verify");
      }
    } catch (error) {
      console.error('Error updating position:', error);
    }
  };
  
  const renderBoardBoxes = () => {
    const boardBoxes = [];

    var tempHoldRow = 0; 
    var tempHoldCol = 0;
    for (let i = 81; i >= 1; i--) {
      var subclass="";
      if( tempHoldRow < 9 && tempHoldCol === 0){
        subclass = 'right';
        tempHoldRow +=1;
        if (tempHoldRow === 9){
          tempHoldCol = 1;
          tempHoldRow = 0;
        }
      }
      else if(tempHoldRow < 9 && tempHoldCol === 1){
        subclass = 'left'; 
        tempHoldRow +=1;
        if (tempHoldRow === 9){
          tempHoldCol = 0;
          tempHoldRow = 0;
        }
        }
      const classNames = `boardbox ${subclass}`;
      const imgSrc =
        i === number + 2
          ? 'https://img.icons8.com/ultraviolet/40/pawn.png'
          : '';

      boardBoxes.push(
        <div className={classNames} key={i}>
          {imgSrc && <img className="img" id='pawn' src={imgSrc} alt="" />}
        </div>
      );
    }
    if (number >= 78){
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.email);
          updateDoc(userDocRef, { startQu: true });
          document.getElementById("diceholder").innerHTML = "<h1 style='color:white'>You Won</h1>"
   
        }
      } catch (error) {
        alert("Some error occured, pls try again. If issue persists, pls contact helpdesk")
      }
      
      
    }
    return boardBoxes;
  };



return (
  <div>
    <div>
      
      <div style={{ textAlign: 'center', color: 'white' }}>
        <br />
        
        <br />
        <br />
        
        <br />
      </div>
      <div style={{ textAlign: 'center' }}>
        <style>
          {`
          h2 {
            text-align: center;
            padding: 6px;
            color: white;
          }
          .out {
            height: 100vw;
            width: 100vw;
            background-image: url("./images/board.jpg");
            background-size: 100vw 100vw;
            background-repeat: no-repeat;
            float: center;
          }
          .mn {
            position: absolute;
            top: 90px;
            left: 20px;
          }
          #side {
            height: 500px;
            width: 200px;
            margin-left: 500px;
          }
          .btn {
            height: 40px;
            width: 100px;
            margin-left: 50px;
            margin-top: 50px;
            border-radius: 5px;
            color: white;
          }
          .boardbox {
            height: calc(100vw/9);
            width: calc(100vw/9);
            z-index: -1;
          }
          .left {
            float: left;
          }
          .right {
            float: right;
          }
          .img {
            height: auto;
            width: calc(100vw/9);
            margin: 2px 0px 3px 0px;
          }
          #dice {
            height: 80px;
            width: 80px;
            font-size: 70px;
            display: flex;
            color: #0B5ED7;
            margin: auto;
            border: none;
            align-items: center;
            justify-content: center;
            align-content: center;
            border-radius: 10%;
            background-color: white;
          }
           #dice:disabled{
              background-color:#c1bbbb;
            }
        `}
        </style>
        <div>
      <div className="out">{renderBoardBoxes()}</div>
      <div className="mn"></div>
      <br />
      <center>
        <br />
       <div id="diceholder">
       <button id="dice" onClick={random} disabled={diceDisabled}>
          <h4>Press Here</h4>
        </button>
       </div>
      </center>
    </div>
        <br/>
        <br/>
      
<button id='verifyButton' disabled={verifyDisabled} onClick={unlockButton} style={{padding:"2.5% 4%", border:"none", height:"auto", width:"auto", borderRadius:"10px", textAlign:"center", fontSize:"1rem"}}>{verifyButtonText}</button>
<br/>
        <br/>
        <br/>
        <br/>
        <div style={{ color: 'white', textAlign: 'center', fontSize:"1.5rem" }}>
          <h2>Directions</h2>
          <br/>

<div style={{ display: 'flex', justifyContent: 'center' }}>
<div className="card" style={{ width: '4.5rem', margin: '0 5px', borderRadius: '50%' , backgroundColor:"#0B5ED7", color:"white"}}>
  <div className="card-body">
    <h3 className="card-title"  style={{ fontWeight: 'bold'}}>&uarr;</h3>
  </div>
</div><br/>&nbsp;&nbsp;&nbsp;
<div className="card" style={{ width: '4.5rem', margin: '0 0 0 -5px', borderRadius: '50%',  backgroundColor:"#0B5ED7", color:"white" }}>
  <div className="card-body">
    <h3 className="card-title" style={{ fontWeight: 'bold'}}>&darr;</h3>
  </div>
</div>
</div>

<br/>
<center><h5>Made by Tech Team - iOS Club !</h5></center>
<br/>
<br/>
<br/>

        </div>
      </div>
    </div>
  </div>
);
        }

export default GameComponent;
