import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import itemShape from '../../../helpers/propz/itemShape';
import './MyStuff.scss';

class MyStuff extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    removeItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, removeItem } = this.props;
    const editLink = `/edit/${item.id}`;
    const singleLink = `/stuff/${item.id}`;
    return (
      <div className="MyStuff col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <img className="card-img" src={item.itemImage} alt="item" />
            <Link to={editLink} className="btn btn-outline-warning mr-1">Edit</Link>
            <Link to={singleLink} className="btn btn-outline-danger mr-1">Single</Link>
            <button className="btn btn-outline-success" onClick={() => removeItem(item.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyStuff;
