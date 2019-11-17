import React,{Component,createRef} from 'react';
import {Link} from 'react-router-dom';
import {post} from 'axios';
import Standard from '../Reuse/Standard';
import '../../Css/Login/Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }
    errorMessage = createRef();
    errorInput1 = createRef();
    errorInput2 = createRef();
    stateChange = e => {
        this.setState({[e.target.name]:e.target.value});
    }
    submitCheck = e => {
        e.preventDefault();
        const submitValue = {
            email:this.state.email,
            password:this.state.password
        }
        console.log(submitValue);
        post("http://13.124.89.129/auth",submitValue).then(response => console.log(response));

        this.errorMessage.current.classList.add("error-message-active");
        this.errorInput1.current.classList.add("error-input-active");
        this.errorInput2.current.classList.add("error-input-active");
    }   
    render() {
        return (
            <Standard title="로그인하기">
                <div>
                    <form onSubmit={this.submitCheck}>
                        <input ref={this.errorInput1} name="email" value={this.state.email} onChange={this.stateChange} type="email" required minLength="12" className="login-body-main-input" placeholder="이메일"/>
                        <input ref={this.errorInput2} name="password" value={this.state.password} onChange={this.stateChange} type="password" required minLength="6" maxLength="12" className="login-body-main-input" placeholder="비밀번호"/>
                        <div className="error_password" ref={this.errorMessage}>이메일 또는 비밀번호가 잘못 입력되었습니다.</div>
                        <button className="login-body-main-btn" type="submit">로그인</button>
                    </form>
                    <div className="login-body-help">
                        <span>비밀번호를 잊으셨나요?</span>
                        <Link className="resetting">비밀번호 재설정</Link>
                        <br/>
                        <span>처음이신가요?</span>
                        <Link className="resetting" to="/register/account">회원가입 하기</Link>
                    </div>
                </div>
            </Standard>
        )
    }
}

export default Login;