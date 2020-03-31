import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
  
class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
    }
    this.clickChange=this.clickChange.bind(this)
    this.clickdecrease=this.clickdecrease.bind(this)
  }
  clickChange(){
    this.setState({
      count:this.state.count+1
    })
  }
  clickdecrease(){
    this.setState({
      count:this.state.count-1
    })
  }
  render(){
    var styles={
      textAlign: 'center',
      fontSize:"150px"
    }
    var styles2={
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

    }
    var styles3={
      borderRadius: "30px",
      backgroundColor: "lightgrey",
      padding: "20px",
      margin:"10px",
      outline: "none"

    }
    return(
      <div>
        <h1 style={styles}>{this.state.count}</h1>
        <div style={styles2}>
        <button style={styles3} onClick={this.clickChange}>INCREMENT</button>
        <button style={styles3} onClick={this.clickdecrease}>DECREMENT</button>
        </div>
      </div>
    );
  }
}


  ReactDOM.render(<App />,document.getElementById('root'));
  


serviceWorker.unregister();
