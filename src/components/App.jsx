import React, { Component } from 'react';

import Data from './Data.js';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Profile from './Profile.jsx';

import { Route, withRouter } from 'react-router-dom';


class App extends Component{
    render() {
        return (
            <div>
                
                <Route path="/" exact render={()=> <Login login={Data}/>} />
                <Route path="/profile" exact render={()=> <Profile profile={Data} />} />
                
                
                <Route path="/sign" exact render={()=> <SignUp sign={Data}/>} />
                
                
            </div>
        );
        
    }
}

export default withRouter(App);