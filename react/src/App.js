import './App.css';
import React, { Component } from 'react';
import './bootstrap.css'
import PizzaApp from './components/PizzaApp';

class App extends Component {
  render() {
    return (
      <div className="bg-light App">
        <PizzaApp/>
      </div>
    )
  }
}

export default App;