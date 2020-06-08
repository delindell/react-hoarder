import React from 'react';

import './SingleStuff.scss';
import itemData from '../../../helpers/data/itemData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('problem getting single item', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff">
        <h1>{item.itemName}</h1>
        <img className="card-img" src={item.itemImage} alt="item" />
        <p>Description: {item.itemDescription}</p>
      </div>
    );
  }
}

export default SingleStuff;
