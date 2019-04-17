import React from 'react';
import { connect } from 'react-redux';
import {FetchTools, DeleteTool} from '../../Actions/Actions';
import Nav from '../../Nav/Nav';
import './Home.css'
import {Link} from 'react-router-dom';

class Home extends React.Component {
    
    componentDidMount() {
        this.props.FetchTools();
    }


    render() {
        console.log(this.props)
        return(
            
            <div>
                <Nav />
                {this.props.tools.map(t => {
                    return (
                        <div>
                            <p onClick={() => this.props.DeleteTool(t.id)}>{t.name}</p>
                            <p>{t.id}</p>  
                        </div>
                    
                    )
                })}
                <div className="CategoriesContainer">
                   <h1 className="CategoryHeader">Browse Tools by Category</h1>
                   <div className="Categories">
                        <Link to="/lawnandgarden"><div className="CategoryCard">
                            <h2 className="CardHead" >Lawn and Garden</h2>
                            <h3 className="CardSubTitle" >Make that yard beautiful</h3>
                        </div> </Link>
                        <Link to="/powertools"><div class="CategoryCard">
                            <h2 className="CardHead" >Power Tools</h2>
                            <h3 className="CardSubTitle" >Works Smarter, not harder</h3>
                        </div> </Link>
                        <Link to="/handtools"><div class="CategoryCard">
                            <h2 className="CardHead" >Hand Tools</h2>
                            <h3 className="CardSubTitle" >True craftsmanShip</h3>
                        </div> </Link>
                        <Link to="/airtools"><div class="CategoryCard">
                            <h2 className="CardHead" >Air Tools</h2>
                            <h3 className="CardSubTitle" >These tools don't blow</h3>
                        </div> </Link>
                        <Link to="/automotive"><div class="CategoryCard">
                            <h2 className="CardHead" >Automotive</h2>
                            <h3 className="CardSubTitle" >Vroom Vroom</h3>
                        </div> </Link>
                        <Link to="/misc"><div class="CategoryCard">
                            <h2 className="CardHead" >Misc</h2>
                            <h3 className="CardSubTitle" >Ladders, Vacuums, Etc</h3>
                        </div> </Link>
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
    { FetchTools, DeleteTool  }
  )(Home);