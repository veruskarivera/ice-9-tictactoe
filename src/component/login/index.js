import React from 'react';
class LogIn extends React.Component{
    handleClick(){
        console.log('User is login in');
        console.log(this.refs.username.value); 
        console.log(this.refs.password.value);
        console.log(this.props.users);
        if(this.refs.username.value=== "test"&&
           this.refs.username.value=== "test");
        this.props.loginUser();
    }

    render() { 
        return (
        <div>
            <input type="text" ref="username"/>
            <br></br>
            <input type="password" ref ="password"/>
            <br></br>
            <input type="button" value="Login"
                onClick={() => this.handleClick()}></input>
        </div>
  );
}
}
export default LogIn;
