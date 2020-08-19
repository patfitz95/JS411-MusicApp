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
      isLoggedIn: true,
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
          page = <div>
            <TextField/>
            <TextField/>
            <Button onClick={this.logIn}>LOGIN</Button>
            </div>;
        }

     return( 
      <div className="App">
        <AppBar position="static">
          <p>Sean &amp; Patricks Music App</p>
        </AppBar>

        {page}

      </div>
     )
  };
}

export default App;
