import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

export default() => {
  return (<div className="ui secondary menu">
    <Link to="/" className="ui item">All Ideas</Link>
    <div className="right menu">
      <div className="ui item"><GoogleAuth/></div>
    </div>
  </div>);
};
