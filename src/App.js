import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Component/Index/Index';
import Login from './Component/Login/Login';
import RegisterAccount from './Component/Register/RegisterAccount';
import RegisterEmail from './Component/Register/RegisterEmail';
import RegisterPassword from './Component/Register/RegisterPassword';
import RegisterSuccess from './Component/Register/RegisterSuccess';
import Timeline from './Component/Timeline/Timeline';
import ResetPasswordEmail from './Component/ResetPassword/ResetPasswordEmail';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Index}/>
                <Route exact path="/register/account" component={RegisterAccount}/>
                <Route exact path="/register/email" component={RegisterEmail}/>
                <Route exact path="/register/password" component={RegisterPassword}/>
                <Route exact path="/register/success" component={RegisterSuccess}/>
                <Route exact path="/resetpassword/email" component={ResetPasswordEmail}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/timeline" component={Timeline}/>
            </Router>
        )
    }
}

export default App;