import React,{useState,useRef} from 'react';
import {Link} from 'react-router-dom';

const ResetPasswordEmailCheck = ({email}) => {
    const [checkValue, setCheckValue] = useState("");
    const [emailChecked,setEmailChecked] = useState(false);
    const checkEmail = e => {
        if(true) {
            setEmailChecked(true);
        }
    }
    const setEmailValue = e => {
        setCheckValue(e.target.value);
    }
    const goNext = e => {
        if(!emailChecked) {
            e.preventDefault();
            alert("이메일 코드를 확인해 주세요");
            return; 
        }
    }
    return (
        <div className="ResetPasswordEmail">
            <div className="ResetPasswordEmail-header">
                <h1>이메일을 코드를 보내드렸습니다.</h1>    
            </div>
            <div className="ResetPasswordEmail-body" style={{position:"relative"}}>
                <input value={checkValue} onChange={setEmailValue} type="text" laceholder="인증번호" className="standard-input"/>
                <button className="standard-overlap-check-btn" type="submit" onClick={checkEmail} >확인</button>
                <br/><br/><br/>
                <br/><br/><br/>
                <br/><br/><br/>
                <Link to={{pathname:"/resetpassword/password",state:{email:email}}} onClick={goNext} className="standard-next-btn">다음</Link>
            </div>
        </div>
    )
}

export default ResetPasswordEmailCheck;