import React,{useState} from 'react';

const ResetPasswordEmailSend = ({PlusLevel}) => {
    const [email,setEmail] = useState('');

    const changeValue = e => {
        setEmail(e.target.value);
    }
    const onSubmit = () => {
        if(!email.length) return;
        PlusLevel();
    }
    return (
        <div className="ResetPasswordEmail">
            <div className="ResetPasswordEmail-header">
                <h1>이메일을 다시 인증해주세요.</h1>    
            </div>
            <div className="ResetPasswordEmail-body">
                <form onSubmit={onSubmit}>
                    <input type="email" minLength="12"  value={email} onChange={changeValue} placeholder="이메일" className="standard-input" />
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <button type="submit" className="standard-next-btn">다음</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordEmailSend;