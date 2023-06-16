import React, { useState, useEffect } from 'react';

const GameComponent = () => {
  const [number, setNumber] = useState(1);
  const [id, setId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      move2();
    }, 200);

    setId(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const play = () => {
    setNumber(1);
  };

  const random = () => {
    let a = Math.ceil(Math.random() * 6);
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
                break;
            }
          }
          d += 1;
        } else {
          m = 0;
          newNumber -= 1;
          clearInterval(id);
        }
        return newNumber;
      });
    }
  };

  const move2 = () => {
    // Your logic for move2 function here
  };

  const styles = {
    h2: {
      textAlign: 'center',
      backgroundColor: 'brown',
      padding: '6px',
      color: 'cornsilk',
    },
    out: {
      height: '525px',
      width: '525px',
      backgroundImage: 'url("http://1.bp.blogspot.com/-yBEg3t3hKNg/ULHwBqCjpvI/AAAAAAAAAIU/Ofh8eSViV24/s1600/Snakes_and_Ladders.jpg")',
      backgroundSize: '525px 525px',
      backgroundRepeat: 'no-repeat',
      float: 'left',
    },
    mn: {
      height: '500px',
      width: '500px',
      position: 'absolute',
      top: '90px',
      left: '20px',
    },
    side: {
      height: '500px',
      width: '200px',
      marginLeft: '500px',
    },
    btn: {
      height: '40px',
      width: '100px',
      marginLeft: '50px',
      marginTop: '20px',
      borderRadius: '5px',
    },
    dice: {
      height: '100px',
      width: '100px',
      fontSize: '70px',
      color: 'black',
      margin: 'auto',
      border: 'none',
      backgroundColor: 'white',
    },
  };

  return (
    <div>
      <h2 style={styles.h2}>Snake and Ladder</h2>
      <div style={styles.out}></div>
      <div style={styles.mn} id="out"></div>
      <div style={styles.side}>
        <button style={styles.btn} id="Play" onClick={play}>
          New game
        </button>
        <br />
        <center>
          <button style={styles.dice} onClick={random}></button>
        </center>
      </div>
    </div>
  );
};

export default GameComponent;
