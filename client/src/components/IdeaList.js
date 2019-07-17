import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchIdeas} from '../actions';
import {trimText} from '../helpers.js';

class IdeaList extends Component {
  componentDidMount() {
    this.props.fetchIdeas();
  }

  renderList = () => {
    return this.props.ideas.map(idea => {
      return (<div key={idea.id} className="item">
        <i className="lightbulb outline big icon"/>
        <div className="content">
          <Link to={`/ideas/${idea.id}`} className="header">{idea.title}</Link>
          <div>{trimText(idea.description, 35)}</div>
          {this.renderAdmin(idea)}
        </div>
      </div>);
    });
  };

  renderAdmin = idea => {
    if (this.props.currentUserId === idea.userId) {
      return (<div style={{
          marginTop: '5px'
        }}>
        <Link to={`/ideas/edit/${idea.id}`} className="ui button primary">Edit</Link>
        <Link to={`/ideas/delete/${idea.id}`} className="ui button negative">Delete</Link>
      </div>);
    }
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (<div style={{
          textAlign: 'right'
        }}>
        <Link to="/ideas/new" className="ui button primary">Create Idea</Link>
      </div>);
    }
  };

  render() {
    return (<div>
      <h1 style={{
          textAlign: 'center'
        }}>Programming Project Ideas</h1>
      <div className="ui celled middle aligned list">
        {this.renderList()}
      </div>
      {this.renderCreate()}
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    ideas: Object.values(state.ideas),
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  }
};

export default connect(mapStateToProps, {fetchIdeas})(IdeaList);
