import React from 'react';
import './Welcome.css'
import '../../App.css'
import {Link} from 'react-router-dom';
import WhiteLogo from '../../components/Login/Imgs/WhiteLogo.svg';

const Welcome = () => {
    return (
        <div className="Container">
            <nav class="topNav">
                <img className="LogoSvg" src={WhiteLogo} alt="Logo"/>
            </nav>
            <div className="ContentWrapper">
                <p className="do-you-have-any-tool">Do you have any tools you want to lend out?</p>
                <div className="BtnContainer">
                    <Link to="/addtool"><button className="YesBtn">Yes!</button></Link>
                    <Link to="/home"><button className="NoBtn">Not right now</button></Link>
                </div>
            </div>
        </div>

    )
}

export default Welcome;