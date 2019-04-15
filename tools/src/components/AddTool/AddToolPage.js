import React from 'react';
import '../../App.css'
import './AddTool.css'


class AddToolPage extends React.Component {
    
    render(){
        return (
            <div className="Container">
                <nav>
                    <h1 className="Logo">Use My Tools</h1>
                    <ul>
                    <a href="#" className="NavItem">My Tools</a>
                    <a href="#" className="NavItem">Favorites</a>
                    <a href="#" className="NavItem">Requests</a>
                    <a href="#" className="NavItem">Help</a>
                    <i class="fas fa-user-circle fa-lg" ></i>
                    </ul>
                </nav>
                <form>
                    <input placeholder="Tool Name"/>
                    <select name="ToolType" placeholder="Tool Type">
                        <option value="1">Type</option>
                        <option value="2">Type</option>
                        <option value="3">Type</option>
                        <option value="4">Type</option>
                    </select>
                    <select name="Condition" placeholder="Condition">
                        <option value="1">Poor</option>
                        <option value="2">Okay</option>
                        <option value="3">Good</option>
                        <option value="4">Excellent</option>
                    </select>
                    <input name="desc" placeholder="Brand, Tips, Uses, Etc"/>
                </form>
            </div>   
        )
    }
}

export default AddToolPage;