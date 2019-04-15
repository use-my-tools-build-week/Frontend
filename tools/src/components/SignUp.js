import React from 'react';
import '../App.css'

class SignUp extends React.Component {



    render() {
        return (
            <div className="LoginContainer">
               <div className="LoginNav">
                    <h1>Use My Tools</h1>
                    <a href="#">Help</a>
                </div>
                <div className="Login">
                    <h2>Sign Up</h2>
                    <form>
                        <p>Email</p>
                        <input placeholder="Example@gmail.com" 
                        type="text" name="email"/>
                        <p>Password</p>
                        <input placeholder="*********" 
                        type="password" name="password"/>
                        <p>Already have an account? Log in</p>
                        <button>Sign Up</button>
                    </form>
                    
                    
                </div> 
            </div>
            
        )
    }
}

export default SignUp;