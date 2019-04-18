import React from 'react';
import { connect } from 'react-redux';
import {
  FetchTools,
  DeleteTool,
  FetchCategories,
  FetchConditions
} from '../../Actions';
import Nav from '../../Nav/Nav';
import './Home.css';
import { Link, Switch, Route } from 'react-router-dom';
import Category from '../CategoryPages/Category';

class Home extends React.Component {
  componentDidMount() {
    this.props.FetchTools();
    // fetch categories and conditions if not already in state
    const { categories, conditions } = this.props;
    if (categories.length === 0) {
      this.props.FetchCategories();
    }

    if (conditions.length === 0) {
      this.props.FetchConditions();
    }
  }

  render() {
    console.log(this.props.tools);
    return (
      <div>
        <Nav />
        <Switch>
          <Route
            path="/home"
            exact
            render={() => (
              <>
                {/* {this.props.tools &&
                  this.props.tools.map(t => {
                    return (
                      <div>
                        <p onClick={() => this.props.DeleteTool(t.id)}>
                          {t.name}
                        </p>
                        <p>{t.id}</p>
                      </div>
                    );
                  })} */}
                <h1 className="CategoryHeader">Browse Tools by Category</h1>
                <div className="CategoriesContainer">
                  {this.props.categories &&
                    this.props.categories.map(c => (
                      <div className="Categories" key={c.id}>
                        <Link to={`/home/categories/${c.id}`}>
                          <div class="CategoryCard">
                            <h2 className="CardHead">{c.name}</h2>
                            <h3 className="CardSubTitle">{c.blurb}</h3>
                          </div>{' '}
                        </Link>
                      </div>
                    ))}
                </div>
                <h1 className="PopularHeader">Popular Tools Near You</h1>
                <div className="PopularContainer">
                  {this.props.tools &&
                    this.props.tools.splice(2,3).map(t => (
                      <div className="Popular" key={t.id}>
                          <div class="PopularCard">
                            <img className="toolImg" src={t.img_url} alt="toolImg" />
                            <img className="userImg" src={t.loaner_img_url} alt="loanerImg"/>
                            <h2 className="PopularCardHead">{t.name}</h2>
                            <h4 className="names"><span className="owner">Owner: </span>{t.firstname} {t.lastname}</h4>
                          </div>{' '}
                      </div>
                    ))}
                </div>
              </>
            )}
          />
          <Route path="/home/categories/:id" component={Category} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tools: state.Reducer.Tools,
    DataStart: state.DataStart,
    error: state.error,
    categories: state.categories.categories,
    conditions: state.conditions
  };
};

export default connect(
  mapStateToProps,
  { FetchTools, DeleteTool, FetchConditions, FetchCategories }
)(Home);
