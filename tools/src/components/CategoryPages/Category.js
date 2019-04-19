import React from 'react';
import { connect } from 'react-redux';
import { FetchCategory } from '../../Actions';
import Tool from '../Tool/Tool';

import './Category.css';

class Category extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.FetchCategory(id);
  }

  render() {
    const { category } = this.props;

    if (!category) {
      return <h1>Loading...</h1>
    }

    const tools = category.tools.results;

    return (
      <div>
        <h1>{category.name}</h1>
        <div class="catWrapper">
        
          { tools.map(t => (
            <Tool tool={t} key={t.id} />
         ))}
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  const { category } = state.category;
  return {
    category
  };
};

export default connect(
  mapStateToProps,
  { FetchCategory }
)(Category);
