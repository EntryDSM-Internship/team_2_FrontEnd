import React,{Component,createRef} from 'react';
import {Link} from 'react-router-dom';
import {post} from 'axios';
import Standard from '../Reuse/Standard';
import '../../Css/Register/RegisterPassword.scss';

class RegisterAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:'',
            passwordCheck:''
        };
    }
    error = createRef();
    componentWillMount(){
        if(!this.props.location.state) {
            alert("잘못된 접근 입니다."); 
            window.history.back();
        }
    }
    register = e => {
        if(this.state.password===this.state.passwordCheck) {
            const submitValue = {
                email:this.props.location.state.email,
                password:this.state.password,
                name:this.props.location.state.name
            }
            console.log(submitValue);
            post("http://13.124.89.129/signup",submitValue);
            
        }
        else {
            e.preventDefault();
        }
    }
    stateChange = e => {
        this.setState({[e.target.name]:e.target.value});
    }
    errorChange = () => {
        if(this.state.password!==this.state.passwordCheck) {
            this.error.current.classList.add("error");
        }
        else this.error.current.classList.remove("error");
    }
    render() {
        return (
            <Standard title="회원가입하기">
                <div className="password">
                    <div className="password-header">
                        <h1>비밀번호를 생성하세요.</h1>
                    </div>
                    <div className="password-body">
                        <input name="password" onChange={this.stateChange} ref={this.input} value={this.state.password} minLength="6" maxLength="12" placeholder="비밀번호" type="password" className="password-input" />
                        <input name="passwordCheck" onKeyUp={this.errorChange} onChange={this.stateChange} value={this.state.passwordCheck} minLength="6" maxLength="12" placeholder="비밀번호 확인" type="password" className="password-input" /><br/>
                        <span style={{opacity:0}} ref={this.error}>비밀번호와 비밀번호 확인이 일치하지 않습니다</span>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <Link onClick={this.register} className="next-btn" to="/register/success">회원가입</Link>
                    </div>
                </div>
            </Standard>
        );
    }
}
export default RegisterAccount;