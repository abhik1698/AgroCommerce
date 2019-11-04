import React from 'react';
import './App.css';
import Header from './components/header.js';
import Index from './components/index/index.js';
import LoginForm from './components/login/login.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from './components/login/auth.js';
import AfterLogin from './components/login/afterLogin.js';

import Blogs from './components/Blogs/index.js';

const auth = new Auth();
const handleAuthentication = (props) => {
  if(props.location.hash){
    auth.handleAuth();
  }
}

function App() {
  return (
  	<BrowserRouter>
      <div className="App">
        <Header />
      	<Switch>
          <Route path='/' exact component={Index} />
          <Route path='/blogs' exact component={Blogs} />
          <Route path='/login' exact render={() => <LoginForm auth={auth}/>} />
          <Route path='/afterlogin' exact render={(props) => { handleAuthentication(props); return <AfterLogin /> }} />
  	    </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
