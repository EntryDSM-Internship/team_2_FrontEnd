import React from 'react';
import LeftBar from './Leftbar';
import RightBar from './Rightbar';
import '../../Css/Reuse/Standard.scss';

const Standard = ({children,title}) => {
    return (
        <div className="standard">
            <div className="standard-header">
                <h1>{title}</h1>
            </div>
            <div className="standard-body">
                <LeftBar/>
                <div className="standard-body-main">
                    {children}
                </div>  
                <RightBar/>
            </div>
        </div>
    );
}

export default Standard;