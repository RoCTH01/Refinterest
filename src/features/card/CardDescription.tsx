import React from 'react';
import './CardDescription.css';

interface CardDescriptionProps {
    description: string | null;
}

const CardDescription:React.FC<CardDescriptionProps> = (props) => {
    
    if (props.description === null) {
        // return <div className="card-description-placeholder">No description provided.</div>;
        return <input className="card-description-placeholder" placeholder="Enter description here" />;
    }

    return (
        <div className="card-description">
            {props.description}
        </div>
    );
}

export default CardDescription;