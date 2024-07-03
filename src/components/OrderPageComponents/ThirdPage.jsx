import React from "react";
import './ThirdPage.css';
import delivery from './delivery.png';

function ThirdPage()
{
    return(
        <div className="container">
            <div className="content">
                <h1>We'll deliver in</h1>
                <h1>30 minutes or</h1>
                <h1>less, or it's <span className="free">free!</span></h1>
                <p id="order-page-content-desc">Your dream pizza is just a tap away!</p>
                <button className="order-now"><span>ORDER NOW</span></button>
            </div>    
                <div className="delivery-img">
                <img src={delivery} alt="deliver-img" className="animated-img"/>
            </div>
        </div>
    )
}
export default ThirdPage;