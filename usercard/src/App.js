import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user:[]
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios
    .get(`https://api.github.com/users/jamesedward1024`)
        .then(response => {
          this.setState({ user: response.data });
        })
        .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
