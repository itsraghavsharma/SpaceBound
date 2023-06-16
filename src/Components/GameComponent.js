import React, { useState, useEffect } from 'react';


const GameComponent = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const dices = ['', '&#9856', '&#9857', '&#9858', '&#9859', '&#9860', '&#9861'];
    let a;
    let j;
    let n = 1;
    let m = 0;
    let id = 100;

    for (let a = 0; a < 5; a++) {
      for (let b = 0; b <= 9; b++) {
        document.getElementById("out").innerHTML += "<div class='boardbox left' id='box" + id + "' ></div>";
        id--;
      }
      for (let c = 0; c <= 9; c++) {
        document.getElementById("out").innerHTML += "<div class='boardbox right'id='box" + id + "'></div>";
        id--;
      }
    }
    document.getElementById("box" + number).innerHTML = "<img id='counter' class='img' src='http://www.freepngimg.com/thumb/chess/9-chess-pawn-png-image-thumb.png'></img>";

    return () => {
      clearInterval(id);
    };
  }, []);

  const play = () => {
    setNumber(1);
    document.getElementById("out").style.visibility = "visible";
    document.getElementById("dice").style.visibility = "visible";
    document.getElementById("Play").style.visibility = "hidden";
    document.getElementById("dice").innerHTML = '&#9856';
  };

  const random = () => {
    const dices = ['', '&#9856', '&#9857', '&#9858', '&#9859', '&#9860', '&#9861'];
    let a = Math.ceil(Math.random() * 6);
    document.getElementById("dice").innerHTML = dices[a];

    if (number + a > 100) {
      a = 100 - number;
    }

    let d = 0;
    move();

    function move() {
      setNumber((prevNumber) => {
        let newNumber = prevNumber + 1;
        let m = d + 1;

        if (m < a || m === a) {
          if (d === a - 1) {
            switch (newNumber) {
              case 5:
                newNumber = 25;
                break;
              case 10:
                newNumber = 29;
                break;
              case 22:
                newNumber = 41;
                break;
              case 28:
                newNumber = 55;
                break;
              case 44:
                newNumber = 95;
                break;
              case 70:
                newNumber = 89;
                break;
              case 79:
                newNumber = 81;
                break;
              case 99:
                newNumber = 7;
                break;
              case 92:
                newNumber = 35;
                break;
              case 73:
                newNumber = 53;
                break;
              case 78:
                newNumber = 39;
                break;
              case 37:
                newNumber = 17;
                break;
              case 31:
                newNumber = 14;
                break;
              default:
                newNumber = newNumber;
            }
          }
          d += 1;
        } else {
          m = 0;
          newNumber -= 1;
          clearInterval(move);
        }

        return newNumber;
      });
    }
  };

  return (
    <div>
      <style>{`
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
          margin-top: 20px;
          border-radius: 5px;
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
          color: black;
          margin: auto;
          border: none;
          background-color: white;
        }
      `}</style>
      <h2>ऐLan</h2>
      <div className="out" id="out"></div>
      <div className="mn" id="out"></div>
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
