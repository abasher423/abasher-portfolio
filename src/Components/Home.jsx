import '../Styles/Home.css'
import Typical from 'react-typical';
import star from '../images/star.png';

const Home = () => {
    return (
        <div className="home">
            {/* ---------------- Slogan --------------- */}
            <div className="slogan">
                <div className="slogan1">
                    <h3><span>Better</span> design,</h3>
                </div>
                <div className="slogan2">
                    <h3><span>Better</span> experience</h3>
                </div>
            </div>
            <div className="slogan3">
                    <h3>
                        {/* <span>&lt;</span> */}
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
                        {/* <span>/&gt;</span> */}
                    </h3>
                </div>

            {/* ---------------------- scroll ---------------------- */}
            <div className="scroll">
                <h4>Let’s see my <span>work</span> 👇</h4>
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