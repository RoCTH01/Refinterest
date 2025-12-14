import React from 'react';
import './CardDescription.css';

interface CardDescriptionProps {
    description: string;
}

const CardDescription:React.FC<CardDescriptionProps> = (props) => {
    return (
        <div className="card-description">
            {props.description}
        </div>
    );
}

export default CardDescription;