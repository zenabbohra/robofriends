import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='tc'>
        {/*<h1>Loading</h1>*/}
        <p className='f1'>ROBOFRIENDS</p>
        <SearchBox />
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
  }
}

export default App;
