import React from 'react';
import './MyTools.css';
import Nav from '../../Nav/Nav';
import {connect} from 'react-redux';
import {GetMyTools} from '../../Actions/Actions';
import MyTool from '../Tool/MyTool';


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
        console.log(this.props)
        return (
            <div >
                <Nav />
                <div className="mytoolheadercontainer">
                    <h3 className="mytoolHeader">My Tools</h3>
                    <button className="mytoolbutton">+ Add New Tool</button>  
                </div>
                
                <div className="mytoolwrapper">
                    {this.props.mytools.map(tool => {
                       return <MyTool tool={tool} />  
                    })}
                    
                </div>
                
            </div>
        )
    }
}

const MapStateToProps = state => {
    console.log(state)
    return {
       mytools: state.Reducer.Mytools 
    }
}

export default connect(MapStateToProps, {GetMyTools})(MyTools);