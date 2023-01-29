import React from "react";
import StyledFirebaseAuth from "./StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const uiConfig = {
  signInSuccessUrl: "./",
  signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID ],
};

function SignInScreen() {
  return (
    <div style={{ textAlign:"center", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <h1>Please sign in to access this content ❤️</h1>
        <p>(you only gotta do this once)</p>
        <div style={{ padding:"2rem", margin:"2rem", border:"grey 1px solid", width:"max-content", borderRadius:"10rem" }}>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
        <p>AICS has blocked school accounts from using login services like this;<br/>We cannot fix this ;-;</p>
    </div>
  );
}

export default SignInScreen;