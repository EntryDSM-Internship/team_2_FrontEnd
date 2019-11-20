import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {post} from 'axios';
import Standard from '../Reuse/Standard';
import '../../Css/Register/RegisterEmail.scss';

class RegisterEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailCheck:'',
            emailChecked:false
        }
    }
    stateChange = e => this.setState({[e.target.name]:e.target.value});
    emailCheck = e => {
        const submitValue = {
            authCode:this.state.emailCheck
        }
        post("http://13.124.89.129/emailcheck",submitValue);
        this.setState({emailChecked:true});
    }
    goNext = e => {
        if(!this.state.emailChecked) {
            e.preventDefault();
            alert("인증코드를 확인하세요");
        }
    }
    componentWillMount(){
        if(!this.props.location.state) {
            alert("잘못된 접근 입니다."); 
            window.history.back();
        }
    }
    render() {
        return (
            <Standard title="회원가입하기">
                <div className="email">
                    <div className="email-header">
                        <h1>이메일로 코드를 보내드렸습니다.</h1>
                    </div>
                    <div className="email-body">
                        <input placeholder="인증번호" value={this.state.emailCheck} name="emailCheck" type="text" onChange={this.stateChange} className="email-body-input" />
                        <button onClick={this.emailCheck} className="checkCode">확인</button><br/><br/><br/><br/><br/><br/>
                        <Link onClick={this.goNext} className="next-btn" to={{pathname:"/register/password",state:{nickName:this.props.location.state.nickName,email:this.props.location.state.email}}}>다음</Link>
                    </div>
                </div>
            </Standard>
        );
    }
}

export default RegisterEmail;