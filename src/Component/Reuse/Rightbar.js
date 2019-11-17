import React from 'react';
import '../../Css/Reuse/side-bar.scss'
import RightBarImg from '../../img/right-side.png';

const LeftBar = () => {
    return (
        <div className="side-bar" style={{background:`url(${RightBarImg}) no-repeat`,backgroundSize:"cover"}}></div>
    )
}
export default LeftBar;