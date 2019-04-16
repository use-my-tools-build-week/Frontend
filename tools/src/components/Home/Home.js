import React from 'react';
import { connect } from 'react-redux';
import {FetchTools} from '../../Actions/Actions';

class Home extends React.Component {
    
    componentDidMount() {
        this.props.FetchTools();
    }


    render() {
        console.log(this.props)
        return(
            
            <div>
                {this.props.tools.map(tool => {
                    return (
                        <div>
                            <p>{tool.name}</p>
                        </div>
                    )
                })}
                <h1>Home</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        tools: state.Tools,
        DataStart: state.DataStart,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { FetchTools }
  )(Home);