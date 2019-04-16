import React from 'react';
import '../../App.css';
import './Login.css';
import {Link} from 'react-router-dom';
import Logo from './Imgs/Logo.svg'
import {connect} from 'react-redux';
import {ActionLogin} from '../../Actions/Actions';
import {withRouter} from 'react-router-dom';


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


    onSubmit = (e) => {
        e.preventDefault();
        this.props.ActionLogin(this.state).then(() => {
            this.props.history.push('/welcome');
        })

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="LoginContainer">
                <div className="SideDiv">

                </div>
                <div className="Login">
                    <form className="formContainer" onSubmit={this.onSubmit}>
                        <img className="Logo" src={Logo} alt="Logo"/>
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
                            <button type="submit" className="button-1">Login</button>
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

export default withRouter(
     connect(null, {ActionLogin})(Login));