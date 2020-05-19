import React from 'react';

import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavBar/MyNavBar';
import Home from '../components/Home/Home';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <MyNavBar />
        <Home />
      </div>
    );
  }
}

export default App;
