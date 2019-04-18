import React from 'react';
import './MyTools.css';
import Nav from '../../Nav/Nav';


class MyTools extends React.Component {
    constructor() {
        super();
        this.state = {
            mytools: ''
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Nav />
                <div>
                    <h2>My Tools</h2>
                    <button>+ Add New Tool</button>  
                </div>
                
            </div>
        )
    }
}

export default MyTools;