import React, { useState } from 'react';

const GameComponent = () => {
  const [number, setNumber] = useState(1);

  const play = () => {
    setNumber(1);
  };

  const random = () => {
    const diceValues = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const diceRoll = Math.ceil(Math.random() * 6);

    const newNumber = number + diceRoll <= 100 ? number + diceRoll : number;

    setNumber(newNumber);
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
          background-color: #11143F;
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
          color: white;
          margin: auto;
          border: none;
          background-color:black;
        }
      `}
      </style>
      <h2>ऐLan</h2>
      <div className="out">{renderBoardBoxes()}</div>
      <div className="mn"></div>
      <div id="side">
        <button className="btn" id="Play" onClick={play}>
          New game
        </button>
        <br />
        <center>
          <button id="dice" onClick={random}></button>
        </center>
      </div>
    </div>
  );
};

export default GameComponent;
