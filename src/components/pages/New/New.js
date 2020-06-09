import React from 'react';

import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';

import './New.scss';

class New extends React.Component {
  state = {
    itemName: '',
    itemImageUrl: '',
    itemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImageUrl: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  saveNewItem = (e) => {
    e.preventDefault();
    const {
      itemName,
      itemImageUrl,
      itemDescription,
    } = this.state;
    const newItem = {
      itemName,
      itemImage: itemImageUrl,
      itemDescription,
      uid: authData.getUid(),
    };
    itemData.postItem(newItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save item', err));
  }

  render() {
    const {
      itemName,
      itemImageUrl,
      itemDescription,
    } = this.state;
    return (
      <div className="New col-12">
        <h1>New Stuff</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="item-name">Item Name</label>
            <input
             type="text"
             className="form-control"
             id="item-name"
             value={itemName}
             onChange={this.nameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Item Image Url</label>
            <input
             type="text"
             className="form-control"
             id="item-image"
             value={itemImageUrl}
             onChange={this.imageChange} />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Item Description</label>
            <input
             type="text"
             className="form-control"
             id="item-description"
             value={itemDescription}
             onChange={this.descriptionChange} />
          </div>
          <button onClick={this.saveNewItem} className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default New;
