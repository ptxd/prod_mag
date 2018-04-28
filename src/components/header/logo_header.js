import React from 'react';
import Logo from '../../img/Logo/Guild_of_Cryptocurrency2.png';

const LogoHeader = () => {
    return (
            <div className="logo" >
                <img className="logo__img" src={Logo} alt="logo" style={{width:'100px',height:'100px'}}/>
            </div>
    )
}

export default LogoHeader;