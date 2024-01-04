import React from 'react';

export const ContentSection = ({ title, innerContent }) => {
    return (
        <div className="content-section">
            <p className="font-21">{title}</p>
            {innerContent}
        </div>
    )
}
