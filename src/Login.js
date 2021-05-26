import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase';

import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
 

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        //sign in 
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className= 'login'>
            <div className= 'login__logo'>
                <img 
                src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt=''/>
                <img
                src='https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png' alt=''/>
            </div>

            
                <Button type='submit' onClick={signIn}>
                    Sign in 
                </Button>
            </div>
            
        
    )
}

export default Login
