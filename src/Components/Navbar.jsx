import { useState } from 'react';
import '../Styles/Navbar.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                    <span>&lt;</span>
                    A.B
                    <span>/&gt;</span>
                </a>
            </div>
            <div className="navbar">
                <ul className={ menu ? "menu-open" : ""}>
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#works">Works</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
            <div className="icons">
                <a href="/github"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                <a href="/linkedin"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
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