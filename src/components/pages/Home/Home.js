import React from 'react';
import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';
import MyStuff from '../../shared/MyStuff/MyStuff';

import './Home.scss';

class Home extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    const uid = authData.getUid();
    itemData.getItemsByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('problem getting items', err));
  }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => <MyStuff item={item} key={item.id} />);
    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {buildItemCards}
        </div>
      </div>
    );
  }
}

export default Home;
