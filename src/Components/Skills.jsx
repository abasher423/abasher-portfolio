import '../Styles/Skills.css';
import { Icon } from '@iconify/react';
import Aos from 'aos';
import { useEffect } from 'react';

const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="skills">
                <div className="card" data-aos="zoom-in">
                    <div>
                        <Icon icon="bx:bx-code-alt" />
                    </div>
                    <h3>Languages</h3>
                    <p>HTML, CSS, Sass, JavaScript, Node</p>
                </div>
                <div className="card" data-aos="zoom-in">
                    <div>
                        <Icon icon="akar-icons:react-fill" />
                    </div>
                    <h3>Frameworks</h3>
                    <p>React, Express, Bootstrap</p>
                </div>
                <div className="card" data-aos="zoom-in">
                    <div>
                        <Icon icon="mdi:material-ui" />
                    </div>
                    <h3>Libraries</h3>
                    <p>Material-UI, Mongoose, Redux</p>
                </div>
                <div className="card" data-aos="zoom-in">
                    <div>
                        <Icon icon="akar-icons:figma-fill" />
                    </div>
                    <h3>Tools</h3>
                    <p>Figma, Postman, Visual Studio Code</p>
                </div>
                <div className="card" data-aos="zoom-in">
                    <div>
                        <Icon icon="dashicons:database" />
                    </div>
                    <h3>Databases</h3>
                    <p>SQLite, SQL, MongoDB</p>
                </div>
                <div className="card" data-aos="zoom-in">
                    <div>
                        <Icon icon="bx:bx-git-branch" />
                    </div>
                    <h3>Version Control</h3>
                    <p>Git, GitHub</p>
                </div>
            </div>
            <div className="interests">

            </div>
        </div>
    );
};

export default Skills;