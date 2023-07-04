import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { doc, updateDoc, addDoc, getDoc } from 'firebase/firestore';
import { decryptString, volPass } from './values';
import { teamDataConverter } from '../models/UserModel';


const GameComponent = ({onUpdateState, pos}) => {
 
  const [number, setNumber] = useState(1);
  const [verifyDisabled, setVerifyDisabled] = useState(false);
  const [diceDisabled, setDiceDisabled] = useState(true);
  const [verifyButtonText, setVerifyButtonText] = useState('Verify');

  const play = () => {
    setNumber(2);
  };
  useEffect(() => {
    setNumber(pos);
  }, [pos]);




  const unlockButton = async () => {

    if(number == 0)
    {
      setDiceDisabled(false);
      setVerifyDisabled(true)
      setVerifyButtonText("Verified")
      return;
    }

    const docRef = doc(db, "users", auth.currentUser.email).withConverter(teamDataConverter);
    const docSnap = await getDoc(docRef);

   

    const timestamp = docSnap.data().upTime; 
    const timestampDate = timestamp.toDate();
    const currentTime = new Date().getTime();

    console.log(timestamp);
    console.log(currentTime);

    if (currentTime > timestampDate.getTime()) {
      var inpCode = document.getElementById('passwordInput').value;
      if (inpCode === "6969") {
        setDiceDisabled(false);
        setVerifyButtonText('Verified!');
        setVerifyDisabled(true);
        
      document.getElementById('passwordInput').value = "";
document.getElementById("verifyArea").style.display = "none";
      } else {
        alert("Wrong Code! If you are a team member attempting to unlock this, it will result in your team's disqualification next time");
      }
    } else {
    
      alert("The time has not yet passed!");
    }
  };

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
  const displayArea = ()=>{
document.getElementById("verifyArea").style.display = "block";
  }

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
          ? 'https://img.icons8.com/emoji/48/rocket-emji.png'
          : '';

      boardBoxes.push(
        <div className={classNames} key={i}>
          {imgSrc && <img className="img" id='pawn' src={imgSrc} alt="" />}
        </div>
      );
    }
    if (number >= 78){
      document.getElementById("diceholder").innerHTML = "<h1 style='color:white'>You Won</h1>"
    }
    return boardBoxes;
  };



return (
  <div>
    <div>
      
      <div style={{ textAlign: 'center', color: 'white' }}>
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
            height: 70px;
            width: 70px;
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
      
<button id='verifyButton' disabled={verifyDisabled} onClick={displayArea} style={{padding:"2.5% 4%", border:"none", height:"auto", width:"auto", borderRadius:"10px", textAlign:"center", fontSize:"1rem"}}>{verifyButtonText}</button>
<br/>
<br/>
<div id="verifyArea" style={{display:"none"}}>
  
<input id="passwordInput" style={{width:'auto', height:"auto", border:"none"}} autoComplete='off' type='password' placeholder='Volunteer Only Code'></input><br/>
<button id='verifyButton' onClick={unlockButton} style={{padding:"2.5% 4%", border:"none", height:"auto", width:"auto", borderRadius:"10px", textAlign:"center", fontSize:"1rem"}}>Submit</button>

</div>
<br/>
      </div>
    </div>
  </div>
);
        }

export default GameComponent;
