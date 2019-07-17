import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchIdea} from '../actions';

class IdeaShow extends Component {
  componentDidMount() {
    this.props.fetchIdea(this.props.match.params.id);
  }

  render() {
    const {idea} = this.props;
    if (!idea) {
      return null;
    }
    return (<div>
      <h1>Idea Details</h1>
      <div className="ui piled segment">
        <h4 className="ui header">{idea.title}</h4>
        {idea.description}
      </div>
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    idea: state.ideas[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {fetchIdea})(IdeaShow);
