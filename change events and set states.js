import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
  
class App extends React.Component{
  constructor(){
    super()
    this.state={
      firstname:"",
      lastname:""
    }
    this.handlechange=this.handlechange.bind(this)
  }
  handlechange(e){
    const {name,value}=e.target
   this.setState({
     [name]:value
   })
  }
  render(){
    var styles= {
      backgroundColor:'skyblue',
      height:"500px"
    }
    return(
      <div style={styles}>
        <div style={{textAlign: "center"}}>
        <h1>Form</h1>
        </div>
        <div>
          <input type="text" name="firstname" value={this.state.firstname} placeholder="enter firstname" onChange={this.handlechange}></input><br></br><br></br>
          <input type="text" name="lastname" value={this.state.lastname} placeholder="enter lastname" onChange={this.handlechange}></input>
        </div>
        <h1> {this.state.firstname}  {this.state.lastname}</h1>
      </div>
    );
  }
}


  ReactDOM.render(<App />,document.getElementById('root'));
  


serviceWorker.unregister();
