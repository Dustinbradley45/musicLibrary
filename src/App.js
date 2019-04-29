import React from 'react';
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

 

  render() {
    const { isLoggedIn } = this.state;
    
    return (
      
      <div className="App">
        {/* {
          isLoggedIn === false ?
          <Login
            isLoggedIn={isLoggedIn}
            /> :
            <Main/>   
        }
      */}
        <Main
         
        />
      </div>
    );
  }
}

export default App;
