import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/layout/Header.js'
import './App.css';
import TicTacToe from './components/pages/tic-tac-toe/tictactoe.js'
import AccountsMain from './components/pages/bank/AccountsMain.js'

class App extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      logoClick : 0
    };
  }

  handleClick = (number) => {
    this.setState({
      logoClick : number,
      
    })
    console.log(this.state);

  }

  render() {
  return (
    <Router>
    <div className="App">
      <div className= 'container'>
        <Header handleClick = {this.handleClick}/>
        {/* <SVG handleClick = {this.handleClick}/> */}
        {this.state.logoClick === 0}
        {this.state.logoClick === 1}
        {this.state.logoClick === 2}
        {this.state.logoClick === 3}
      {/* <header className="App-header"> */}
      <Route 
      exact
      path = '/'
      render = {(props) => (
        <React.Fragment>
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </React.Fragment>
        )}
        />

        <Route path = '/tictactoe' component = {TicTacToe} />
        <Route path = '/bank' component = {AccountsMain} />

      {/* </header> */}
      </div>
    </div>
     </Router>
  );
}
}
export default App;
