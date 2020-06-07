import React from 'react';
import { Link } from 'react-router-dom';
import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    const editLink = '/edit/12345';
    const singleLink = '/stuff/12345';
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <Link to={editLink} className="btn btn-outline-warning mr-1">Edit</Link>
        <Link to={singleLink} className="btn btn-outline-danger">Single</Link>
      </div>
    );
  }
}

export default MyStuff;
