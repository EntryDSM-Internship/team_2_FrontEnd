import React from 'react';
import '../../Css/Reuse/side-bar.scss'
import LeftBarImg from '../../img/left-side.png';

const LeftBar = () => {
    return (
        <div className="side-bar" style={{background:`url(${LeftBarImg}) no-repeat`,backgroundSize:"cover"}}></div>
    )
}
export default LeftBar;