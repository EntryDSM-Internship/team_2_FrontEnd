import React from 'react' 
import Standard from '../Reuse/Standard';
import congratulation from '../../img/congratulation.png';
import '../../Css/Register/RegisterSuccess.scss';
import {Link} from 'react-router-dom';

const RegisterSuccess = (props) => {
    return (
      <Standard title="회원가입하기">  
        <div className="success">
          <img className="congratulation" src={congratulation}/>
          <h1>축하드립니다.<br/>{props.location.state.title}</h1>
          <div className="btn-wrap">
            <br/><br/> 
            <Link to="/login" className="standard-next-btn">로그인</Link>
          </div>
        </div>
      </Standard>  
    );
}

export default RegisterSuccess;