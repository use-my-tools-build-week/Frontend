import React from 'react';
import '../../App.css'
import './AddTool.css'


const AddToolPage = () => {
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
        </div>
        
    )
}

export default AddToolPage;