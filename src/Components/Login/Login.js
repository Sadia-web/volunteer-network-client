import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from './firebaseConfig';
import logo from '../../logos/logo.png';
import Gl from '../../logos/google.png';

import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/"} };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

  

    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);

          }).catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;


          });
    }
    return (

        <div className="container volunteer-login">
            <a href="/home"><img src={logo} alt="" className="form-logo" /></a>

            <div className="login-form bg-white">
                <div className="mt-5">
                    <h3>Login with</h3>

                    <button onClick={handleGoogleSignIn} className="btn btn-outline-info"> <img src={Gl} alt="" width="20px"/>Continue With Google</button>
                    <br/>
                    <p>Don't have an account?<span style={{color:"red", textDecoration: "underline"}}>create an account.</span></p>
                </div>
            </div>

        </div>

    );
};

export default Login;