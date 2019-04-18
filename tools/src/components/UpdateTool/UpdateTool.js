import React from 'react';
import '../../App.css';
import './UpdateTool.css';
import WhiteLogo from '../Login/Imgs/WhiteLogo.svg';
import { connect } from 'react-redux';
import { FetchCategories, FetchConditions } from '../../Actions';
import {UpdateTool, GetMyTools} from '../../Actions/Actions';

class UpdateToolPage extends React.Component {
  constructor() {
    super();
    this.state = {
      toolName: '',
      Description: ''
    };
  }

  componentDidMount() {
    this.props.GetMyTools();
    const { categories, conditions } = this.props;
    if (categories.length === 0) {
      this.props.FetchCategories();
    }

    if (conditions.length === 0) {
      this.props.FetchConditions();
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUpdate = e => {
    e.preventDefault();
    const {
        match: {
          params: { id }
        }
    }=this.props
    this.props.UpdateTool({
        name: this.state.toolName,
        description: this.state.Description,
        category_id: this.state.ToolCategory,
        condition_id: this.state.Condition,
        id: id
      })
      .then(() => this.props.history.push('/mytools'));
  };

  render() {
    return (
      <div className="Container">
        <nav>
          <img src={WhiteLogo} className="Logo" alt="Logo" />
        </nav>
        <form onSubmit={this.handleUpdate}>
          <div>
            <p className="p1">Tool Name</p>
            <input
              className="inputOne"
              placeholder="Tool Name"
              name="toolName"
              value={this.state.toolName}
              onChange={this.handleChange}
              className="toolName"
            />
          </div>
          <div>
            <p className="p2">Tool Category</p>
            <select
              className="Category"
              name="ToolCategory"
              onChange={this.handleChange}
            >
              {this.props.categories &&
                this.props.categories.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <p className="p3">Tool Condition</p>
            <select
              className="Condition"
              name="Condition"
              onChange={this.handleChange}
            >
              {this.props.conditions &&
                this.props.conditions.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <p className="p4">Description</p>
            <textarea
              name="Description"
              placeholder="Brand, Tips, Uses, Etc"
              value={this.state.Description}
              onChange={this.handleChange}
              className="Desc"
            />
          </div>

          <button className="DoneBtn" type="submit">
            Done
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)
  return {
    tools: state.tools,
    categories: state.categories.categories,
    conditions: state.conditions.conditions,
    mytools: state.Mytools
  };
};

export default connect(
  mapStateToProps,
  { UpdateTool, FetchCategories, FetchConditions, GetMyTools }
)(UpdateToolPage);