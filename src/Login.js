import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {

const [state, dispatch] = useStateValue;
const signIn = () => {

    //google auth
    auth
    .signInWithPopup(provider)
    .then((result) => {

        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,

        })
        console.log(result);
    })
    .catch((error) => alert(error.message));
};

    return (
        <div className="login">


<div className="login__logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Pisitif_logo_2018_%28French_film_magazine%29.png" alt=""/>
</div>
        <Button type="submit" onClick={signIn}>
            Sign in
        </Button>
            
        </div>
    )
}

export default Login;
