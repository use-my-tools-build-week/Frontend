import React from 'react';
import '../../App.css';
import './Login.css';
import {Link} from 'react-router-dom';
import Logo from './Imgs/Logo.svg';


class SignUp extends React.Component {



    render() {
        return (
            <div className="LoginContainer">
                <div className="SideDiv">

                </div>
                <div className="Login">
                <form className="formContainer">
                        <img className="Logo" src={Logo} />
                        <h2 className="sign-up">Sign Up</h2>
                        <p className="email">Email</p>
                        <input placeholder="Example@gmail.com" 
                        type="text" name="email"/>
                        <p className="password">Password</p>
                        <input placeholder="*********" 
                        type="password" name="password"/>
                        <div className="ButtonContainer">
                            
                            <button className="button3">Create My Account</button>
                        </div>
                        {/* <div className="CheckContainer">
                            <input className="Checkbox" type="checkbox" name="accept" />
                            <p className="checkbox-label">I accept the Terms and Conditions</p>
                        </div> */}
                        
                        <p className="ForgotPassword">Forgot Password?</p>
                    </form>
                </div> 
            </div>
            
        )
    }
}

export default SignUp;