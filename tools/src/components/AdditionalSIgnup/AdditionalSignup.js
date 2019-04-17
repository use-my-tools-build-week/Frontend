import React from 'react';
import WhiteLogo from '../Login/Imgs/WhiteLogo.svg';
import './AdditionalSignup.css';
import {Link} from 'react-router-dom';


class AdditionalSignup extends React.Component {
    constructor() {
        super();

        this.state = {
            firstname: '',
            lastname: '',
            address: '',
            addressinfo: '',
            state: '',
            zipcode: ''

        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <div className="ASUContainer">
                <nav className="topNav">
                    <img className="LogoSvg" src={WhiteLogo} alt="Logo"/>
                </nav>
                <h3 className="ASUHeader">To Complete the sign up process, please fill out the following information</h3>
                <form className="formWrapper">
                    <div >
                        <p>First Name</p>
                        <input className="input1" 
                        name="firstname" 
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div >
                        <p>Last Name</p>
                        <input className="input2"
                        name="lastname" 
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div >
                        <p className="p11">Address</p>
                        <input className="input3"
                        name="address" 
                        value={this.state.address}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div >
                        <p className="p22">Apt/Suite/Unit/Building/Floor/Etc</p>
                        <input className="input4"
                        name="addressinfo" 
                        value={this.state.addressinfo}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div >
                        <p className="p33">State</p>
                        <input className="input5"
                        name="state" 
                        value={this.state.state}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div >
                        <p className="p44">Zip Code</p>
                        <input className="input6"
                        name="zipcode" 
                        value={this.state.zipcode}
                        onChange={this.handleChange}
                        />
                    </div>
                    
                </form>
                <div className="SUBtnContainer">
                    <Link to="/welcome"><button className="signupBtn">Done</button></Link>
                </div>
                
            </div>
        )
    }
}

export default AdditionalSignup;