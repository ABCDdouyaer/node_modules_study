import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer }  from 'mobx-react'
@observer
class App extends Component {

  constructor(props){
    super(props)
    console.log(props)
  }
  componentDidMount(){
    this.time = setInterval(()=>{
      this.props.store.change();
    },2000)
  }
  componentWillUnmount(){
    clearInterval(this.time);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           {this.props.store.a}
        </p>
        <p className="App-intro">
           {this.props.store.total}
        </p>
      </div>
    );
  }
}

export default App;
