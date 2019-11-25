import React ,{Component,createRef} from 'react';
import Standard from '../Reuse/Standard';
import {post} from 'axios';
import {Link} from 'react-router-dom';

class ResetPasswordPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:'',
            passwordCheck:''
        };
    }
    nextSite = createRef();
    error = createRef();
    componentWillMount(){
        if(!this.props.location.state) {
            alert("잘못된 접근 입니다."); 
            window.history.back();
        }
    }
    register = e => {
        if(this.state.password===this.state.passwordCheck);
        else {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다"); 
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
    submit = e => {
        const submitValue = {
            email:this.props.location.state.email,
            password:this.state.password,
        }
        console.log(submitValue);
        post("http://13.124.89.129/signup",submitValue);
        this.nextSite.current.click();
        alert("비밀번호 재설정에 성공하였습니다");
    }
    render() {
        return (
            <Standard title="비밀번호 재설정하기"> 
                <div className="password">
                    <div className="password-header">
                        <h1>비밀번호를 생성하세요.</h1>
                    </div>
                    <div className="password-body">
                        <form onSubmit={this.submit}>
                            <input name="password" onChange={this.stateChange} ref={this.input} value={this.state.password} required minLength="6" maxLength="12" placeholder="비밀번호" type="password" className="standard-input" />
                            <input name="passwordCheck" onKeyUp={this.errorChange} onChange={this.stateChange} value={this.state.passwordCheck} required minLength="6" maxLength="12" placeholder="비밀번호 확인" type="password" className="standard-input" /><br/>
                            <div style={{opacity:0}} ref={this.error}>비밀번호와 비밀번호 확인이 일치하지 않습니다</div>
                            <br/><br/><br/><br/><br/><br/><br/>
                            <button type="submit" onClick={this.register} className="standard-next-btn">회원가입</button> 
                        </form>
                        <Link style={{display:"none"}} ref={this.nextSite} onClick={this.register} to={{pathname:"/congratulation",state:{title:"비밀번호 재설정이 완료되었습니다."}}}>회원가입</Link>
                    </div>
                </div>
            </Standard>
        )
    }
}


export default ResetPasswordPassword;