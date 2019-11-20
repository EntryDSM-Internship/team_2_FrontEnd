import React from 'react' 
import Standard from '../Reuse/Standard';
import congratulation from '../../img/congratulation.png';
import '../../Css/Register/RegisterSuccess.scss';
import {Link} from 'react-router-dom';

const RegisterSuccess = () => {
    return (
      <Standard title="회원가입하기">  
        <div className="success">
          <img className="congratulation" src={congratulation}/>
          <h1>축하드립니다.<br/>회원가입이 완료되었습니다.</h1>
          <div className="btn-wrap">
            <Link to="/login" className="next-btn">로그인</Link>
          </div>
        </div>
      </Standard>  
    );
}

export default RegisterSuccess;