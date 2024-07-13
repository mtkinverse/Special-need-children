// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-light py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>About Us</h5>
                        <p className="">We are a team of passionate developers building awesome applications.</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Contact Us</h5>
                        <div>
                            <p className="">Email: </p>
                            <p className="">Phone: </p>
                            <p className="">Address:</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3 --bs-border-radius">
                    <p className="--bs-light-color">&copy; 2024 Product Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
