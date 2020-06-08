import React from 'react';
import { Link } from 'react-router-dom';
import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    const { item } = this.props;
    const editLink = `/edit/${item.id}`;
    const singleLink = `/stuff/${item.id}`;
    return (
      <div className="MyStuff col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <img className="card-img" src={item.itemImage} alt="item" />
            <Link to={editLink} className="btn btn-outline-warning mr-1">Edit</Link>
            <Link to={singleLink} className="btn btn-outline-danger">Single</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyStuff;
