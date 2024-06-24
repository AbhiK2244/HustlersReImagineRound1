import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Menu</h4>
                <ul>
                    <li>Veg Pizza</li>
                    <li>Chicken Pizza</li>
                    <li>Pasta</li>
                    <li>Pizza Crust</li>
                    <li>Beverages</li>
                    <li>Pizza Mania</li>
                    <li>Burger Pizza</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>COMPANY</h4>
                <ul>
                    <li>Blog</li>
                    <li>Investor</li>
                    <li>Feedback</li>
                    <li>Ads</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>PIZZA RESTAURANTS</h4>
                <ul>
                    <li>Restaurants Near Me</li>
                    <li>Pizza Near Me</li>
                    <li>Food Near Me</li>
                    <li>Food Delivery</li>
                    <li>Italian Food</li>
                    <li>Order Food Online</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>ABOUT</h4>
                <ul>
                    <li>Gift card</li>
                    <li>Card Balance Enquiry</li>
                    <li>FAQ</li>
                    <li>Virtual Pizza Party</li>
                    <li>E-Gift Vouchers</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>LEGAL</h4>
                <ul>
                    <li>Disclaimer</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-section social-media">
                <h4>SOCIAL MEDIA</h4>
                <ul>
                    <li><i className="fab fa-facebook"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-youtube"></i></li>
                </ul>
                <div className="contact">
                    <p>Toll Free</p>
                    <p>HELLO DOMINO'S</p>
                    <p>1800 208 1234</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>All Rights Reserved. Copyright © </p>
            </div>
        </footer>
    );
};

export default Footer;
