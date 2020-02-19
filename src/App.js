import React from 'react';
import './App.css';
import TicTacToe from './component/tictactoe/index.js'
import LogIn from './component/login/index.js'
//import { render } from '@testing-library/react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      login:false, 
      users:[{username:"test",
              password:"test"}]};
  }
  logoutUser(){ 
    this.setState({login:false}); 
  }
  loginUser(){ 
    this.setState({login:true}); 
  }
  render(){
        return (
          <div>  { 
            (this.state.login) ? 
          <TicTacToe logoutUser={() => this.logoutUser()}/> :
          <LogIn users={this.state.users} 
          loginUser={() => this.loginUser()}/>
          
  }
          </div>
        )
}
}

export default App;
