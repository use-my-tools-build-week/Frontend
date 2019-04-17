import React from 'react';
import '../../App.css'
import './AddTool.css'
import WhiteLogo from '../Login/Imgs/WhiteLogo.svg'


class AddToolPage extends React.Component {
    constructor() {
        super();
        this.state = {
            toolName:'',
            Description: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }






    render(){
        return (
            <div className="Container">
                <nav>
                    <img src={WhiteLogo} className="Logo" alt="Logo" />
                    
                </nav>
                <form>
                    <div>
                    <p className="p1">Tool Name</p>
                        <input className="inputOne" 
                        placeholder="Tool Name"
                        name="toolName"
                        value={this.state.toolName}
                        onChange={this.handleChange}
                        className="toolName"
                        />
                    </div>
                    <div>
                        <p className="p2" >Tool Category</p>
                        <select className="Category" name="ToolCategory" onChange={this.handleChange}>
                            <option  value="Cat1">Cat1</option>
                            <option  value="Cat2">Cat2</option>
                            <option  value="Cat3">Cat3</option>
                            <option  value="Cat4">Cat4</option>
                        </select>
                    </div>
                    <div>
                        <p className="p3">Tool Condition</p>
                        <select className="Condition" name="Condition" onChange={this.handleChange}>
                            <option value="Poor">Poor</option>
                            <option value="Okay">Okay</option>
                            <option value="Good">Good</option>
                            <option value="Excellent">Excellent</option>
                        </select>
                    </div>
                    <div>
                        <p className="p4">Description</p>
                        <textarea name="Description"
                        placeholder="Brand, Tips, Uses, Etc"
                        value={this.state.Description}
                        onChange={this.handleChange}
                        className="Desc"
                        />
                     </div>

                     <button className="DoneBtn" type="submit">Done</button>
                </form>
            </div>   
        )
    }
}

export default AddToolPage;