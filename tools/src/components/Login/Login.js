import React from 'react';
import '../../App.css';
import './Login.css';
import {Link} from 'react-router-dom';

class Login extends React.Component {



    render() {
        return (
            <div className="LoginContainer">
               <div className="LoginNav">
                    <h1 className="Logo">Use My Tools</h1>
                    <a className="Help" href="#">Help</a>
                </div>
                <div className="Login">
                    <h2 className="loginBtn">Login</h2>
                    <form className="formContainer">
                        <p className="email">Email</p>
                        <input placeholder="Example@gmail.com" 
                        type="text" name="email"/>
                        <p className="password">Password</p>
                        <input placeholder="*********" 
                        type="password" name="password"/>
                        <Link to="/signup"><p className="need-an-account-sig">Need an account? Sign Up</p></Link>
                        <button className="button-1">Login</button>
                    </form>
                    
                    
                </div> 
            </div>
            
        )
    }
}

export default Login;