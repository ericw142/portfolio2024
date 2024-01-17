import React from 'react';
import logo from '../eric_w.jpeg';
import { LinkedInButton } from './LinkedInButton';

export const BrandHeader = ({ showLinkedIn }) => {
    return (
        <div id="brand">
            {showLinkedIn && (
                <div style={{marginLeft: '85%'}}>
                    <LinkedInButton />
                </div>
            )}
            <div id="brand-header">
                <div className="logo">
                    <img src={logo} alt="eric-warshawsky" />
                </div>
                <div className="brand-name">
                    <p className="font-32 font-bold">Eric Warshawsky</p>
                    <p className="font-16">Full-Stack Web Developer</p>
                </div>
            </div>
        </div>
    )
}