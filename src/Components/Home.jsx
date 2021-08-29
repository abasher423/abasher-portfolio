import '../Styles/Home.css';
import Typical from 'react-typical';
import star from '../images/star.png';
import { Icon } from '@iconify/react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="home">
            <div className="home-content">
                <div className="content">
                    <div className="home-image" data-aos="fade-right">
                        <div className="content-image"></div>
                    </div>
                    <div className="home-text">
                        <h1 data-aos="fade-left">Frontend Developer</h1>
                        <h2 data-aos="fade-left" data-aos-delay="400">
                            <span>&lt;</span>
                            Abdifatah Basher
                            <span>/&gt;</span>
                        </h2>
                        <h3 data-aos="fade-left" data-aos-delay="800">
                            <Typical
                            steps={[
                                "Frontend Developer 💻", 1000,
                                "Backend Developer ⌨️", 1000,
                                "Recent Graduate 🎓", 1000,
                                "Tech Enthusiast ❤️", 1000,
                                "Quick Learner 📚", 1000,
                                "Reliable 🤝", 1000
                            ]}
                            loop={Infinity}
                            />
                        </h3>
                        <h4 data-aos="fade-left" data-aos-delay="1000">
                            <a href="#home">
                            Let's see my work <Icon icon="akar-icons:arrow-down"/>
                            </a>
                        </h4>
                    </div>
                </div>
            </div>  

            {/* ------------------ stars ------------------------------ */}
            <div className="stars">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
        </div>
    );
};

export default Home;