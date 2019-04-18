import React from 'react';
import './MyTools.css';
import Nav from '../../Nav/Nav';
import {connect} from 'react-redux';
import {GetMyTools} from '../../Actions/Actions';


class MyTools extends React.Component {
    constructor() {
        super();
        this.state = {
            mytools: ''
        }
    }

    componentDidMount() {
        this.props.GetMyTools();
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

const MapStateToProps = state => {
    console.log(state)
    return {
       mytools: state.Mytools 
    }
}

export default connect(MapStateToProps, {GetMyTools})(MyTools);