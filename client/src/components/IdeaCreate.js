import React, {Component} from 'react';
import {connect} from 'react-redux';

import IdeaForm from './IdeaForm';
import {createIdea} from '../actions';

class IdeaCreate extends Component {
  onSubmit = formValues => {
    this.props.createIdea(formValues);
  };

  render() {
    return <IdeaForm title="Create Idea" onSubmit={this.onSubmit}/>;
  }
}

export default connect(null, {createIdea})(IdeaCreate);
