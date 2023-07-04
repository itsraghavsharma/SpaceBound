import React from "react";
import "./passwords.css";
import "../../Components/values.js"
import {  useNavigate } from "react-router-dom";
import { auth, db } from '../../services/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { decryptString } from "../../Components/values.js";

function Passwords() {

  const navigate = useNavigate();
  async function validateAnswers () {
    var form = document.forms["AnswerForm"];
    var ans  = ['U2FsdGVkX1/kYcmGUjDl+hkdrzx7drHOjXNbY635/E8=', 'U2FsdGVkX18rqK7KpcidsAsrhL6b5zqmRZlgGVD2vCc=', 'U2FsdGVkX1+xcLa6ONzebdQvYs6DXBFL8LhjE/c44W4=', 'U2FsdGVkX1/b7pRaI54xNOAg2lhVnzok7pKbkdwKVAI=', 'U2FsdGVkX19WO/OjaWO9en3sWZZoVyO37lmwO5wttmA=', 'U2FsdGVkX18uAF4lTebSeoROBPDRQIhZNK58iMLzEgM=', 'U2FsdGVkX18eFgAeFnaIgHcSPGaW5X2c89dvwJ/eOiQ=', 'U2FsdGVkX18jJThihb2IyqAd7bXaQJ1I4M4tlmSMZiw='];
    for (let index = 0; index <8; ++index) {
      console.log(index);
      if (form[index.toString()].value.toString().toLowerCase().trim() === decryptString(ans[index])){
      }
      else{
        alert("Some of the answers entered are wrong. Check answers and try again");
        return;
      }
    }


    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.email);
        await updateDoc(userDocRef, { startQu: true });
        navigate("/game");
      }
    } catch (error) {
      alert("Some error occured, pls try again. If issue persists, pls contact helpdesk")
    }
   
    }
  
  return (
    <div className="container" style={{ textAlign: "center", height: "100vh", display: "flex",margin: "100px auto", justifyContent: "center", alignItems: "center", marginTop:"100px" }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydMJTLALd6Fysk6FEo4cNQe84_TZHlKLO4wiX7X0glz57eZx0V8RFpf9IDcYXgz63ryc&usqp=CAU"
      alt="Background"
    /><br/>
    <div className="container" style={{ textAlign: "center",margin: "100px auto" }}>
      <form style={{ borderRadius: "20px", maxWidth: "600px", margin: "100px auto" }} action="javascript:void (0);" name="AnswerForm">
        {/* <h1>Hello PLAYERNAME</h1> */}
        <h5 style={{fontSize:"1.1rem", fontWeight:700}}>Given Below Are The Starting Lines From Each Riddle, Enter The Answer Of Riddles Accordingly </h5>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              I'm a Fiery Sphere : 
            </label>
            <input
              type="text"
required
              name="1"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I'm a Planet with Rings :
            </label>
            <input
              type="text"
required
              name="2"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I'm a Cosmic Event :
            </label>
            <input
              type="text"
required
              name="3"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I'm a Phenomenon :
            </label>
            <input
              type="text"
required
              name="4"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              I'm a Cluster of Stars:
            </label>
            <input
              type="text"
required
              name="5"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I'm a Constellation:
            </label>
            <input
              type="text"
required
              name="6"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I visit Once in a While:
            </label>
            <input
              type="text"
required
              name="7"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              I'm a Celestial Body:
            </label>
            <input
              type="text"
required
              name="8"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <button
          type="submit"
          onClick={validateAnswers}
            className="fluid ui button blue"
            style={{
              borderRadius: "10px",
              height: "auto",
              width: "120px",
              margin: "12.5px auto",
              padding:"2%",
              fontSize:"larger",
              display: "block",
              border:"none"
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Passwords;