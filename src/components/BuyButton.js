import React from 'react';
import '../css/buy-button.css';

const BuyButton = ({ children, onClick }) => {
    return (
        <button
            className='buy-button'
            onClick={onClick} 
        >
            {children}
        </button>
    )
};

export default BuyButton;