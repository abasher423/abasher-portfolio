import '../Styles/Contact.css';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    const handler = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        alert("Thank you for submitting your message. I'll get back to you shortly")
    }

    return (
        <div className="contact-container" id="contact">
            <h1 className="title">Contact</h1>
            <div className="contact-content" data-aos="fade-up">
                <h2>Want to get in touch with me?</h2>
                <div className="contact-icons" data-aos="fade-up">
                    <a href="/mailto:abdifatah.basher@outlook.com">
                        <Icon icon="carbon:email" />
                    </a>
                    <a href="https://www.linkedin.com/in/abdifatah-basher-074684194/">
                        <Icon icon="entypo-social:linkedin-with-circle" />
                    </a>
                    <a href="https://github.com/abasher423">
                        <Icon icon="akar-icons:github-fill" />
                    </a>
                </div>
                <div className="address" data-aos="fade-up">
                    <div className="location">
                        <Icon icon="entypo:location-pin" />
                    </div>
                    <p className="address-1">
                        Address: 178 Uxbridge Road,
                    </p>
                    <p className="address-2">
                        London, England. W12 5LD.
                    </p>
                </div>
                <div className="mobile" data-aos="fade-up">
                    <div className="mobile-icon">
                        <Icon icon="ant-design:mobile-filled" />
                    </div>
                    <p>+44 7474 429168</p>
                </div>
                <div className="quick-message" data-aos="fade-up">
                    <form action="/" onSubmit={handler}>
                        <h2>Quick Message</h2>
                        <input type="text" required placeholder="Full Name" name="fullname" id="fullname" onChange={(e) => setName(e.target.value)} value={name}/>
                        <input type="email" required placeholder="Email Address" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <textarea name="messag" required placeholder="Your Message" id="message" cols="30" rows="6" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                        <input type="submit" placeholder="Full Name" name="fullname" id="fullname" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;