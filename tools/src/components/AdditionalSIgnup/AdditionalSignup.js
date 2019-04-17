import React from 'react';
import WhiteLogo from '../Login/Imgs/WhiteLogo.svg';


class AdditionalSignup extends React.Component {
    render() {
        return (
            <div className="ASUContainer">
                <nav class="topNav">
                    <img className="LogoSvg" src={WhiteLogo} alt="Logo"/>
                </nav>
                <form>
                    <div >
                        <p></p>
                        <input className="input1" />
                    </div>
                    <div >
                        <p></p>
                        <input className="input2"/>
                    </div>
                    <div >
                        <p></p>
                        <input className="input3"/>
                    </div>
                    <div >
                        <p></p>
                        <input className="input4"/>
                    </div>
                    <div >
                        <p></p>
                        <input className="input5"/>
                    </div>
                    <div >
                        <p></p>
                        <input className="input6"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdditionalSignup;