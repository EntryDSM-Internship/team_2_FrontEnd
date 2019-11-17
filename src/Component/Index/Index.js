import React from 'react';
import {Link} from 'react-router-dom';
import '../../Css/Index/Index.scss';
import background from '../../img/background.png';

const Index = () => {
    return (
        <div className="index">
            <div className="index-left" style={{background:`url(${background}) no-repeat`,backgroundSize:"cover"}}>
                <div className="index-left-header">
                    <h1 className="index-left-header_text">전세계에 있는 친구들과 <br/>지금 무슨 일이 일어나고 있는지 확인하세요!</h1>
                </div>
            </div>
            <div className="index-right">
                <div className="index-right-header">
                    <h1 className="index-right-header_text">지금 바로 시작하세요.</h1>
                    <Link to="/register/account" className="index-register-btn index-btn">가입하기</Link>
                    <Link to="/login" className="index-login-btn index-btn">로그인하기</Link>
                </div>
            </div>
        </div>
    );
}

export default Index;