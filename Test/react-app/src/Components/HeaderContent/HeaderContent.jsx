import React from 'react'
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
    return (
        <div id="navcontent">
            <a href="http://react.dev"><img src={logo} alt="React" /></a>

            <div>
                <MenuLink linkName="Home" url="Home"/>
                <MenuLink linkName="AboutUs" url="AboutUs"/>
                <MenuLink linkName="Contact" url="Contact"/>
                <MenuLink linkName="Login" url="Login"/>
            </div>
            {/* <img src="vite.svg" alt="Vite logo"/> */}
        </div>
    )
}


export default HeaderContent