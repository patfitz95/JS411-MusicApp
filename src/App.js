import React, {Component} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dashboard from './Components/DashboardComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  logIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let page;

    if (isLoggedIn) {
          page = <Dashboard/>;
        } else {
          page = <div className="login">
            <TextField className="margin20"/>
            <TextField className="margin20"/>
            <Button onClick={this.logIn} variant="contained" color="primary" >LOGIN</Button>
            </div>;
        }

     return( 
      <div className="App">
        <AppBar position="static">
          <h1 className="title">Sean &amp; Patricks Music App</h1>
        </AppBar>

        {page}

      </div>
     )
  };
}

export default App;
