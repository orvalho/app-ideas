import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import history from '../history';
import Modal from './Modal';
import {fetchIdea, deleteIdea} from '../actions';

class IdeaDelete extends Component {
  componentDidMount() {
    this.props.fetchIdea(this.props.match.params.id);
  }

  renderContent = () => {
    if (!this.props.idea) {
      return "Are you sure you want to delete this idea?";
    }
    return `Are you sure you want to delete idea with the title: ${this.props.idea.title}`;
  };

  renderActions = () => {
    const {id} = this.props.match.params;
    return (<React.Fragment>
      <button onClick={() => this.props.deleteIdea(id)} className="ui negative button">Delete</button>
      <Link to="/" className="ui button">Cancel</Link>
    </React.Fragment>);
  };

  onDismiss = () => {
    history.push('/');
  };

  render() {
    return <Modal title="Delete Idea" content={this.renderContent()} actions={this.renderActions()} onDismiss={this.onDismiss}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    idea: state.ideas[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {fetchIdea, deleteIdea})(IdeaDelete);
