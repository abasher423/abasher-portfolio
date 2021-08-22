import '../Styles/Footer.css';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <Icon icon="ant-design:copyright-circle-outlined" style={{fontSize: 22}} />
                <p>
                    2021 - Abdifatah Basher
                </p>
            </div>
        </div>
    );
};

export default Footer;