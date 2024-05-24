import React from "react";
import logo from '../assets/nuages.jpg'

function Header(){
    return(
        <div className="logo_container">
            <img src={logo} alt="logo" id="logo" />
            <h3>Découvrez la météo en temps réel</h3>

        </div>
    )
}

export default Header;