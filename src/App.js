import React, { Component } from 'react';
import NameService from './nameService';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      name: 'DevMountain'
    };

    this.nameService = new NameService();
  }

  subscribeNames = () => {
    this.nameSubscription = this.nameService.getName().subscribe(name => {
      this.setState( { name } )
    })
  }

  unsubscribeNames = () => {
    this.nameSubscription.unsubscribe();
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Hello {this.state.name}</h1>
        </header>

        <button onClick={this.subscribeNames}>Subscribe</button>
        <button onClick={this.unsubscribeNames}>Unsubscribe</button>
      </div>
    );
  }
}

export default App;
