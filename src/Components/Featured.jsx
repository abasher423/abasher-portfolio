import '../Styles/Featured.css';
import image from '../images/velular.png';
import react from '../images/react.png';
import node from '../images/node.png';
import mui from '../images/mui.png';
import mongo from '../images/mongo.png';
import htmlcss from '../images/html-css.png';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import { useEffect } from 'react';

const Featured = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <div id="home">
            <div className="featured-container">
            <div className="featured">
                <div className="featured-text" data-aos="fade-left">
                    <h4>Featured Project</h4>
                    <br />
                    <h2>Velular E-Commerce</h2>
                    <br />
                    <p>
                        Full-stack Web Application which facilitates the buying and selling of high-end custom trainers 
                        built from the ground up using <b>React</b> and <b>Node</b>
                    </p>
                    <br />
                    <div className="logos">
                        <img src={react} alt="react" />
                        <img src={mui} alt="material ui" />
                        <img src={node} alt="node" />
                        <img src={mongo} alt="mongo db" />
                        <img src={htmlcss} alt="html and css" />
                    </div>
                </div>
                <div className="featured-image" data-aos="fade-right">
                    <a href="https://velular.herokuapp.com">
                        <img src={image} alt="velular" />
                    </a>
                </div>
            </div>
            </div>
            <div className="cards-container">
                <div className="card1" data-aos="fade-right" data-aos-delay="400">
                    <div className="box">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <h2 className="card-title">
                            Bachelors     
                        </h2>
                        <p className="card-text">
                            Bachelor of Science with Honours in Computer Science, Class 1.  
                        </p>
                    </div>
                </div>
                <div className="card2" data-aos="fade-right" data-aos-delay="600">
                    <div className="box">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faBookmark} />   
                        </div>
                        <h2 className="card-title">
                            Adaptable
                        </h2>
                        <p className="card-text">
                            Able to grasp new concepts quickly with an excellent capacity to retain new information.
                        </p>
                    </div>
                </div>
                <div className="card3" data-aos="fade-right" data-aos-delay="1000">
                    <div className="box">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faHandshake} />
                        </div>
                        <h1 className="card-title">
                                Reliable
                        </h1>
                        <p className="card-text">
                            Highly motivated individual looking to kickstart his career as a Web Developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;