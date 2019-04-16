import React from 'react';
import { connect } from 'react-redux';
import {FetchTools} from '../../Actions/Actions';
import Nav from '../../Nav/Nav';
import './Home.css'

class Home extends React.Component {
    
    componentDidMount() {
        this.props.FetchTools();
    }


    render() {
        console.log(this.props)
        return(
            
            <div>
                <Nav />
                <div className="CategoriesContainer">
                   <h1 className="CategoryHeader">Browse Tools by Category</h1>
                   <div className="Categories">
                        <div class="CategoryCard">
                            <h2 className="CardHead" >Lawn and Garden</h2>
                            <h3 className="CardSubTitle" >Make that yard beautiful</h3>
                        </div> 
                        <div class="CategoryCard">
                            <h2 className="CardHead" >Power Tools</h2>
                            <h3 className="CardSubTitle" >Works Smarter, not harder</h3>
                        </div> 
                        <div class="CategoryCard">
                            <h2 className="CardHead" >Hand Tools</h2>
                            <h3 className="CardSubTitle" >True craftsmanShip</h3>
                        </div> 
                        <div class="CategoryCard">
                            <h2 className="CardHead" >Air Tools</h2>
                            <h3 className="CardSubTitle" >These tools don't blow</h3>
                        </div> 
                        <div class="CategoryCard">
                            <h2 className="CardHead" >Automotive</h2>
                            <h3 className="CardSubTitle" >Vroom Vroom</h3>
                        </div> 
                        <div class="CategoryCard">
                            <h2 className="CardHead" >Misc</h2>
                            <h3 className="CardSubTitle" >Ladders, Vacuums, Etc</h3>
                        </div> 
                    </div>
                </div>
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