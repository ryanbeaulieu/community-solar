import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import {Home} from './views/Home/Home.jsx';
import {Eligibility} from './views/Eligibility/Eligibility.jsx';
import './App.css';

console.log(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Eligibility} />
      </Switch>
   
    <footer>
      <div className="container">
        <Typography variant="body2" align="center">&copy; Copyright {new Date().getFullYear()} All Rights Reserved.</Typography>
      </div>
    </footer>
   </MuiThemeProvider>
  );
}

export default App;
