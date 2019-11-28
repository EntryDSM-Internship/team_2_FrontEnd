import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Component/Index/Index';
import Login from './Component/Login/Login';
import RegisterAccount from './Component/Register/RegisterAccount';
import RegisterEmail from './Component/Register/RegisterEmail';
import RegisterPassword from './Component/Register/RegisterPassword';
import Congratulation from './Component/Reuse/Congratulation';
import Timeline from './Component/Timeline/Timeline';
import ResetPasswordEmail from './Component/ResetPassword/ResetPasswordEmail';
import ResetPasswordPassword from './Component/ResetPassword/ResetPasswordPassword';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Index}/>
                <Route exact path="/register/account" component={RegisterAccount}/>
                <Route exact path="/register/email" component={RegisterEmail}/>
                <Route exact path="/register/password" component={RegisterPassword}/>
                <Route exact path="/congratulation" component={Congratulation}/>
                <Route exact path="/resetpassword/email" component={ResetPasswordEmail}/>
                <Route exact path="/resetpassword/password" component={ResetPasswordPassword}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Timeline}/>
            </Router>
        )
    }
}

export default App;