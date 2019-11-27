import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <div>
        <Hello/>        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
