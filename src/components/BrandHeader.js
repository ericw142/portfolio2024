import React from 'react';
import logo from '../eric_w.jpeg';
import { FaLinkedin } from "react-icons/fa";

export const BrandHeader = () => {
    return (
        <div>
            <div><a href="https://www.linkedin.com/in/eric-warshawsky-94a96b160/" target="_blank" className="linked-in font-32"><FaLinkedin /></a></div>
            <div id="brand-header">
                <div className="logo">
                    <img src={logo} alt="eric-warshawsky" />
                </div>
                <div className="brand-name">
                    <p className="font-32 font-bold">Eric Warshawsky</p>
                    <p className="font-16">Full-Stack Web Developer</p>
                </div>
            </div>
            <div id="brand-splash"></div>
        </div>
    )
}