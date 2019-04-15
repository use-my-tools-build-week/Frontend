import React from 'react';
import './Welcome.css'
import '../../App.css'

const Welcome = () => {
    return (
        <div className="Container">
            <div className="ContentWrapper">
                <h1 className="welcome">Welcome!</h1>
                <p className="do-you-have-any-tool">Do you have any tools you want to lend out?</p>
                <div className="BtnContainer">
                    <button className="YesBtn">Yes!</button>
                    <button className="NoBtn">Not right now</button>
                </div>
            </div>
        </div>
        
    )
}

export default Welcome;