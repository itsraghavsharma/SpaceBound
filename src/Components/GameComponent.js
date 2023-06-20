import React, { useState } from 'react';

const GameComponent = ({onUpdateState}) => {
  const [number, setNumber] = useState(1);

  const play = () => {
    setNumber(1);
  };

  const random = () => {
    const diceValues = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const diceRoll = Math.ceil(Math.random() * 6);

    const newNumber = number + diceRoll <= 100 ? number + diceRoll : number;

    setNumber(newNumber);
    onUpdateState(newNumber); 
    document.getElementById('dice').innerHTML = diceValues[diceRoll];
  };

  const renderBoardBoxes = () => {
    const boardBoxes = [];

    for (let i = 100; i >= 1; i--) {
      const classNames = `boardbox ${i % 10 === 0 ? 'right' : 'left'}`;
      const imgSrc = i === number ? 'http://www.freepngimg.com/thumb/chess/9-chess-pawn-png-image-thumb.png' : '';

      boardBoxes.push(
        <div className={classNames} key={i}>
          {imgSrc && <img className="img" src={imgSrc} alt="" />}
        </div>
      );
    }

    return boardBoxes;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <style>
        {`
        h2 {
          text-align: center;
          background-color: rgb(8 3 33 );
          padding: 6px;
          color: white;
        }
        .out {
          height: 525px;
          width: 525px;
          background-image: url("http://1.bp.blogspot.com/-yBEg3t3hKNg/ULHwBqCjpvI/AAAAAAAAAIU/Ofh8eSViV24/s1600/Snakes_and_Ladders.jpg");
          background-size: 525px 525px;
          background-repeat: no-repeat;
          float: left;
        }
        .mn {
          height: 500px;
          width: 500px;
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
          color:white
        }
        .boardbox {
          height: 50px;
          width: 50px;
          z-index: -1;
        }
        .left {
          float: left;
        }
        .right {
          float: right;
        }
        .img {
          height: 45px;
          width: 50px;
          margin: 2px 0px 3px 0px;
        }
        #dice {
          height: 80px;
          width: 80px;
          font-size: 70px;
          display:flex;
          color: white;
          margin: auto;
          border: none;
          align-items: center;
          justify-content: center;
          align-content:center;
          border-radius:10%;
          background-color:rgb(19 27 77);
        }
      `}
      </style>
      <div style={{ textAlign: "center" }}>     
       <div className="out">{renderBoardBoxes()}</div>
       </div>
       <div className="mn"></div>
      <br></br>
      <br />
      <br></br>
      <center>
        <br></br><br></br><br></br>
        <button id="dice" onClick={random}><h4>Press Here</h4></button>
      </center>

    </div>
  );
};

export default GameComponent;
