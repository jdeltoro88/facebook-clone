import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'

function Login() {
    const signIn = () => {
        //sign in 
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
