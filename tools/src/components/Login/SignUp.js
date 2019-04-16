import React from 'react';
import '../../App.css';
import './Login.css';
import {Link} from 'react-router-dom';
import Logo from './Imgs/Logo.svg';
import {connect} from 'react-redux';
import {ActionSignUp} from '../../Actions/Actions';
import {withRouter} from 'react-router-dom';


class SignUp extends React.Component {
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

    onSubmit = e => {
        e.preventDefault();
        this.props.ActionSignUp(this.state);

        this.setState({
            email:'',
            password:''
        })
    }


    render() {
        return (
            <div className="LoginContainer">
                <div className="SideDiv">

                </div>
                <div className="Login">
                <form className="formContainer" onSubmit={this.onSubmit}>
                        <img className="Logo" src={Logo} />
                        <h2 className="sign-up">Sign Up</h2>
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
                            
                            <button className="button3" type="submit">Create My Account</button>
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

export default withRouter(
    connect(null, {ActionSignUp})(SignUp));