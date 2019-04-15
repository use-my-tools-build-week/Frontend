import React from 'react';
import '../../App.css';
import './Login.css';
import {Link} from 'react-router-dom';
import Logo from './Imgs/Logo.svg'

class Login extends React.Component {
    constructor(){
        super();
        this.state ={
            email: '',
            password: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        
    }

    render() {
        return (
            <div className="LoginContainer">
                <div className="SideDiv">

                </div>
                <div className="Login">
                    <form className="formContainer">
                        <img className="Logo" src={Logo} />
                        <h2 className="loginBtn">Login</h2>
                    
                        <p className="email">Email</p>
                        <input placeholder="Example@gmail.com" 
                        type="text" name="email" 
                        onChange={this.handleChange}
                        value={this.state.email}
                        />
                        <p className="password">Password</p>
                        <input placeholder="*********" 
                        type="password" name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        />
                        <div className="ButtonContainer">
                            <Link to="/welcome"><button className="button-1">Login</button></Link>
                            <Link to="/signup"><button className="button-2">Sign Up</button></Link>
                        </div>
                        <p className="or">OR</p>
                        <p className="ForgotPassword">Forgot Password?</p>
                    </form>
                    
                    
                </div> 
            </div>
            
        )
    }
}

export default Login;