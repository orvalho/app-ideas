import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import history from '../history';
import Header from './Header';
import IdeaList from './IdeaList';
import IdeaCreate from './IdeaCreate';
import IdeaEdit from './IdeaEdit';
import IdeaDelete from './IdeaDelete';
import IdeaShow from './IdeaShow';

export default() => {
  return (<Router history={history}>
    <div style={{
        paddingBottom: '10px'
      }} className="ui container">
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={IdeaList}/>
        <Route path="/ideas/new" component={IdeaCreate}/>
        <Route path="/ideas/edit/:id" component={IdeaEdit}/>
        <Route path="/ideas/delete/:id" component={IdeaDelete}/>
        <Route path="/ideas/:id" component={IdeaShow}/>
      </Switch>
    </div>
  </Router>);
};
