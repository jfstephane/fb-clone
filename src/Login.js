import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";

function Login() {

const signIn = () => {

    //google auth

}

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

export default Login
