import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  onInputChange = (event) => {
    this.setState({searchInput: event.target.value});
  };

  render() {
    const { robots, searchInput } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchInput.toLowerCase()));
    return !robots.length
      ? <h1>Loading</h1>
      : <div className='tc'>
          <p className='f1'>ROBOFRIENDS</p>
          <SearchBox onInputChange={this.onInputChange}/>
          {filteredRobots.map(robot => {
            return <Card id={robot.id} name={robot.name} email={robot.email}/>
          })}
        </div>
  }
}

export default App;
