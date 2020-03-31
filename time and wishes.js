import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
  class App extends React.Component{
    render(){
      const date=new Date();
      let wish;
      const hours=date.getHours();
      if(hours<=12){
        wish="good morning"
      }
      else if(hours>12 && hours<15){
        wish="good afternoon"
      }
      else if(hours>=15 && hours<=18){
        wish="good evening"
      }
      else if(hours>=18 && hours<=24){
        wish="good night"
      }
  
      var styles={
        backgroundColor:"blue",
        textAlign: 'center'
      }
      return(
        <div>
          <h1 style={styles}>hello friends</h1>
          <h1 style={{fontFamily:"cursive"}}>Hi Welcome to react world.A {wish} to one and all. </h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />,document.getElementById('root'));
  


serviceWorker.unregister();
