import React ,{Component} from 'react';
import Standard from '../Reuse/Standard';
import {Link} from 'axios';
import ResetPasswordEmailSend from './ResetPasswordEmailSend';
import '../../Css/ResetPassword/ResetPasswordEmail.scss';

class ResetPasswordEmail extends Component {
    constructor(props) {
        super(props);
        this.state={
            level:1,
        };
    }
    PlusLevel = () => this.setState(state => ({level:state+1}));
    render() {
        return (
            <Standard title="비밀번호 재설정하기"> 
                {this.state.level === 1 && <ResetPasswordEmailSend PlusLevel={this.PlusLevel}/>}  
            </Standard>
        )
    }
}


export default ResetPasswordEmail;