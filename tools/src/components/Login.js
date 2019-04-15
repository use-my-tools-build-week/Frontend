import React from 'react';
import '../App.css'
import styled from 'styled-components';

const LoginNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    background: lightgrey;
`

class Login extends React.Component {



    render() {
        return (
            <div className="LoginContainer">
               <LoginNav>
                    <h1>Use My Tools</h1>
                    <a href="#">Help</a>
                </LoginNav>
                <div className="Login">
                    <h2>Login</h2>
                    <form>
                        <p>Email</p>
                        <input placeholder="Example@gmail.com" 
                        type="text" name="email"/>
                        <p>Password</p>
                        <input placeholder="*********" 
                        type="password" name="password"/>
                        <p>Need an account? Sign Up</p>
                        <button>Login</button>
                    </form>
                    
                    
                </div> 
            </div>
            
        )
    }
}

export default Login;