import React from 'react';
import './Footer.css';

const Footer = () => {
    return (<div className='last'>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Menu</h4>
                    <ul>
                        <li>Veg Pizza</li>
                        <li>Chicken Pizza</li>
                        <li>Pasta</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>COMPANY</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Investor</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div className="footer-section social-media">
                    <h4>SOCIAL MEDIA</h4>
                    <ul>
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                    </ul>
                    <div className="contact">
                        <p>+919973573057</p>
                        <p>info@gmail.com</p>
                        <p>HELLO DOMINO'S</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>All Rights Reserved. Copyright © Hustlers</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
