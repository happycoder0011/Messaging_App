import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
//from are wrong
import LandingPage from './components/LandingPage';
import Signuppage from './components/Auth/Register';
import Signinnpage from './components/Auth/Login';
import Passwordforgetpage from './components/PasswordForget';
import Homepage from './components/Homepage';
import Adminpage from './components/Adminpage';
import Accountpage from './components/Accountpage';

import * as ROUTES from './constants/routes';

function App() {
  return (
    <div className="App">
      app
      <Router>
        <div>
        <Navigation/>
        <hr/>
        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
        <Route  path={ROUTES.SIGN_UP} component={Signuppage}/>
        <Route  path={ROUTES.SIGN_IN} component={Signinnpage}/>
        <Route  path={ROUTES.PASSWORD_FORGET} component={Passwordforgetpage}/>
        <Route  path={ROUTES.HOME} component={Homepage}/>
        <Route  path={ROUTES.ACCOUNT} component={Accountpage}/>
        <Route  path={ROUTES.ADMIN} component={Adminpage}/>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
