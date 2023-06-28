import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { doc, updateDoc } from 'firebase/firestore';

function Body({message,onUpdateState, name, teammates, pos,id}) {
  const unlockRollButton = () => {
    document.getElementById("dice").removeAttribute("disabled")
  }
  const GameComponent = () => {
    const [number, setNumber] = useState(pos);
  
    const play = () => {
      setNumber(1);
    };
    useEffect(() => {
      setNumber(pos);
    }, [pos]);
  
    const random = () => {
      const diceValues = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
      const diceRoll = Math.ceil(Math.random() * 6);

      const newNumber = number + diceRoll <= 80 ? number + diceRoll : number;

      setNumber(newNumber);
      
      onUpdateState(newNumber); 
      document.getElementById('dice').innerHTML = diceValues[diceRoll];
      document.getElementById('dice').setAttribute("disabled","disabled")
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
          i === number
            ? 'https://img.icons8.com/ultraviolet/40/pawn.png'
            : '';

        boardBoxes.push(
          <div className={classNames} key={i}>
            {imgSrc && <img className="img" id='pawn' src={imgSrc} alt="" />}
          </div>
        );
      }
      if (number >= 80){
        document.getElementById("diceholder").innerHTML = "<h1 style='color:white'>You Won</h1>"
      }
      return boardBoxes;
    };

    return (
      <div>
        <div className="out">{renderBoardBoxes()}</div>
        <div className="mn"></div>
        <br />
        <center>
          <br />
         <div id="diceholder">
         <button id="dice" onClick={random}>
            <h4>Press Here</h4>
          </button>
         </div>
        </center>
      </div>
    );
  };

  const divStyle = {
    backgroundImage: 'url("./images/bg.jpg")',
   
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };
  const navbarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100vw',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust the transparency here (0.8 represents 80% opacity)
    backdropFilter: 'blur(10px)', // Add a blur effect
  };

  return (
    <div>
      <div style={divStyle}>
        <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand navbar-primary sticky-top" style={navbarStyle}>
          <ul className="navbar-nav mr-auto" style={{ margin: 'auto' }}>
            <li className="nav-link active">
              <img src="./images/clublogo.png" width={'110%'} alt="Club Logo" />
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '300px', height: '50px', marginTop: "2px", borderRadius: "50px", fontWeight: 'bold' }}
          >
            Player Name: <span id="playerName"> {name} </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
        </nav>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <br />
          <button
            type="button"
            className="btn btn"
            style={{alignItems:"center", width: '50vw', height: 'auto', margin:0, borderRadius: "25px", fontWeight: 'bold', color:"#0B5ED7", backgroundColor:"white" }}
          >
            <a className="navbar-brand" href="#" style={{ color: "#0B5ED7", fontWeight: 'bold',fontSize: '2rem'  }}>
              ऐlaan
            </a>
          </button>
          <br />
          <br />
          <div
            className="card mx-auto"
            style={{ width: '90vw', alignItems: 'center', justifyContent: 'center', borderRadius:"10px", borderColor:"white" ,  backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(5px)',}}
          >
            <div className="card-body">
              <h2 className="card-title" style={{color:"white"}}>Message Box</h2>
              <p className="card-text">
                <span id="taskMessage" style={{color:"white", fontSize:"1.3rem", textTransform:"capitalize"}}>{message}</span>
              </p>
            </div>
          </div>
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
            #dice:disabled, #dice[disabled]{
              background-color:#b1b1b1;
            }
            .whiteButton{height: auto;
              padding:1% 5% 0%;
              
              width: auto;
              display: flex;
              color: #0B5ED7;
              margin: auto;
              border: none;
              align-items: center;
              justify-content: center;
              align-content: center;
              border-radius: 10px;
              background-color: white;}
          `}
          </style>
          <GameComponent />
          <br/>
          <br></br>
<h2>Teammates</h2>
<div className="card mx-auto" style={{ width: '18rem', alignItems: 'center', justifyContent: 'center' }}>
  <div className="card-body">
  <h5 className="card-title">Team ID: {id}</h5>
    <p className="card-text"><span id="taskMessage">{teammates}</span></p>
  </div>
</div>
<br></br>
</div>
          <br/>
          <button className='whiteButton' onClick={unlockRollButton}><h4>Verify Task</h4></button>
          <br/>
      <br/>
      <h5 style={{color:"white"}}>Game By Tech Team - iOS Club</h5>
      <br/>
      </div>

    </div>
  );
}

export default Body;
