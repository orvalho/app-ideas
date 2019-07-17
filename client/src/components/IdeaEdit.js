import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import IdeaForm from './IdeaForm';
import {fetchIdea, editIdea} from '../actions';

class IdeaEdit extends Component {
  componentDidMount() {
    this.props.fetchIdea(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editIdea(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.idea) {
      return null;
    }
    return <IdeaForm title="Edit Idea" onSubmit={this.onSubmit} initialValues={_.pick(this.props.idea, 'title', 'description')}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    idea: state.ideas[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {fetchIdea, editIdea})(IdeaEdit);
