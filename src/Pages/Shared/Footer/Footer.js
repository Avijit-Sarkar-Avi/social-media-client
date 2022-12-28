import React from 'react';
import { FaTwitter, FaFacebookF, FaRocketchat } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <img src="https://chromeunboxed.com/wp-content/uploads/2022/10/messages_2022_standard_logo_512px-1-Medium.jpeg" alt="" className='w-24 h-24' />
                <p>Social App Ltd.<br />Providing reliable tech since 2022</p>
            </div>

            <footer className='footer'>
                <div>
                    <span className="footer-title">Other Apps</span>
                    <div className="grid grid-flow-col gap-4">

                        <FaTwitter className='w-6 h-6' />

                        <FaFacebookF className='w-6 h-6' />

                        <FaRocketchat className='w-6 h-6' />
                    </div>
                </div>

                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
            </footer>

        </footer>
    );
};

export default Footer;