import '../Styles/About.css';
import { Icon } from '@iconify/react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="about-container">
            <h1 className="title" id="about">About</h1>
            <div className="about" data-aos="fade-up">
                <p>I created this website to present my web development and design skills. 
                    Like many other people, I enjoy spending my free time increasing my knowledge 
                    of Web Development and building new and challenging projects.
                </p>
                <p>
                I am a passionate, reliable and highly motivated Web Developer who is seeking a technical
                 role that will provide me with the opportunity to put my skills and knowledge to use 
                 by implementing effective solutions to meet changing business needs.
                </p>
                <h1>Why work with me?</h1>
                <p>
                    I am a big believer in the fact that the greatest work is done by passionate people. 
                    which is why I strive hard in producing work of high quality!
                </p>
                <p>
                    I am very confident in my ability to learn something new and put it into production. 
                    I work well under pressure and thrive in fast-paced, competitive environments.
                </p>
                <p>
                    I am always excited to learn new things. The most valuable thing I can provide to 
                    your company is the ability to be molded to your stack and meet your business needs.
                </p>
                <p>
                    I am very easy to work with and never have any issues getting along with people. I 
                    enjoy collaborating and accomplishing big things as part of a team.
                </p>
                <div className="interests-container">
                    <div className="interests">
                        <h2>Interests</h2>
                        <ul>
                            <li>Full-stack Development</li>
                            <li>Software Engineering</li>
                            <li>Frontend Engineering</li>
                        </ul>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <div className="education-content">
                            <div className="icon">
                                <Icon icon="fa:graduation-cap" />
                            </div>
                            <h3>BSc in Computer Science (Hons), 2021</h3>
                            <h4>City, University of London</h4>
                        </div>
                        <div className="education-content-2">
                            <div className="icon-2">
                                <Icon icon="fa:graduation-cap" />
                            </div>
                            <h3>A levels, 2018</h3>
                            <h4>Greenford High School, 6th form</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;