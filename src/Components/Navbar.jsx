import { useState } from 'react';
import '../Styles/Navbar.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    const [menu, openMenu] = useState(false);

    const handleMenu = (e) => {
        if (e.target){
            openMenu(!menu);
        };
    };

    return (
        <div className="header">
            <div className="name">
                <a href="/">
                    {/* <span>&lt;</span> */}
                    <Icon icon="teenyicons:ab-testing-outline" data-flip="vertical"/>
                    {/* <span>/&gt;</span> */}
                </a>
            </div>
            <div className="navbar">
                <ul className={ menu ? "menu-open" : ""}>
                    <li><a href="#home" className="left">Home</a></li>
                    <li><a href="#projects" className="left">Projects</a></li>
                    <li><a href="#about" className="left">About</a></li>
                    <li><a href="#contact" className="left">Contact</a></li>
                </ul>
            </div>
            <div className="icons">
                <a href="https://github.com/abasher423"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                <a href="https://www.linkedin.com/in/abdifatah-basher-074684194/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            </div>
            <div className="burger" onClick={handleMenu}>
                <div className={menu ? "line1" : ""}></div>
                <div className={menu ? "line2" : ""}></div>
                <div className={menu ? "line3" : ""}></div>
            </div>
        </div>
    );
};

export default Navbar;