import React from 'react';

const Card = ({ language }) => {
    return (
        <div className="card">
            <h2>{language.title}</h2>
            <p>{language.description}</p>
        </div>
    );
};

export default Card;
