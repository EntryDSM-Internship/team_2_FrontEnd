import React,{Component,createRef} from 'react';
import {Link} from 'react-router-dom';
import {get} from 'axios';
import Standard from '../Reuse/Standard';
import '../../Css/Register/RegisterAccount.scss';

class RegisterAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickName :'',
            email:'',
            name:'',
            checkEmailOverlap:false
        }
    }
    inputToReadOnly = createRef();
    stateChange = e => {
        this.setState({[e.target.name] : e.target.value});
    }
    checkEmailOverlap = e => {
        console.log({email:this.state.email});
        get("http://13.124.89.129/emailcheck",{email:this.state.email}).then(response => {

        })
        if(true) {  
            this.setState({checkEmailOverlap:true});
            this.inputToReadOnly.current.setAttribute("readonly",true);
        } else {
            alert("중복된 이메일이 존재합니다.");
        }   
        e.preventDefault();
    }
    registerFormCheck = e => {
        if(!this.state.checkEmailOverlap) {
            alert("이메일 중복확인을 해주세요");
            e.preventDefault();
        }
    }
    render() {
        return (
            <Standard title="회원가입하기">
                <div className="register">
                    <div className="register-header">
                        <h1>계정을 생성하세요</h1>
                    </div>
                    <div className="register-body">
                        <form onSubmit={this.checkEmailOverlap}>
                            <input name="name" type="text" required maxLength="5" value={this.state.name} onChange={this.stateChange} className="register-input" placeholder="성명"/><br/>
                            <input name="nickName" type="text" required maxLength="12" value={this.state.nickName} onChange={this.stateChange} className="register-input" placeholder="닉네임"/><br/>
                            <input ref={this.inputToReadOnly} name="email" type="email" required minLength="12" value={this.state.email} onChange={this.stateChange} className="register-input" placeholder="이메일"/>
                            <button type="submit" className="overlap-check-btn">중복확인</button><br/>
                            <br/><br/><br/><br/><br/><br/>
                        </form>
                        <Link onClick={this.registerFormCheck} className="next-btn" to={{pathname:"/register/email",state:{nickName:this.state.nickName,email:this.state.email}}}>다음</Link>
                    </div>
                </div>
            </Standard>
        );
    }
}
export default RegisterAccount;