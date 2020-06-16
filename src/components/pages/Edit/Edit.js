import React from 'react';

import './Edit.scss';
import itemData from '../../../helpers/data/itemData';
import authData from '../../../helpers/data/authData';

class Edit extends React.Component {
  state = {
    itemName: '',
    itemImageUrl: '',
    itemDescription: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.itemId;
    itemData.getSingleItem(editId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemName: item.itemName,
          itemImageUrl: item.itemImage,
          itemDescription: item.itemDescription,
        })
      })
      .catch((err) => console.error('could not update item', err));
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

  updateItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
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
    itemData.putItem(itemId, newItem)
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
      <div className="Edit col-12">
        <h1>Edit Stuff</h1>
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
          <button onClick={this.updateItem} className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Edit;
