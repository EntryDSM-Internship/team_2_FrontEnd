import React ,{Component} from 'react';
import Standard from '../Reuse/Standard';
import {Link} from 'axios';
import ResetPasswordEmailSend from './ResetPasswordEmailSend';
import ResetPasswordEmailCheck from './ResetPasswordEmailCheck';
import '../../Css/ResetPassword/ResetPasswordEmail.scss';

class ResetPasswordEmail extends Component {
    constructor(props) {
        super(props);
        this.state={
            level:1,
            email:''
        };
    }
    emailChange = value => {this.setState({email:value})};
    PlusLevel = () => this.setState(state => ({level:state.level+1}));
    render() {
        return (
            <Standard title="비밀번호 재설정하기"> 
                {this.state.level === 1 && <ResetPasswordEmailSend emailChange={this.emailChange} PlusLevel={this.PlusLevel}/>}  
                {this.state.level === 2 && <ResetPasswordEmailCheck email={this.state.email} />}  
            </Standard>
        )
    }
}


export default ResetPasswordEmail;