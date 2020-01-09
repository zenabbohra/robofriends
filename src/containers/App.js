import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  render() {

    return !this.state.robots.length
      ? <h1>Loading</h1>
      : <div className='tc'>
          {/*<h1>Loading</h1>*/}
          <p className='f1'>ROBOFRIENDS</p>
          <SearchBox />
          {this.state.robots.map(robot => {
            return <Card id={robot.id} name={robot.name} email={robot.email}/>
          })}
        </div>
  }
}

export default App;
