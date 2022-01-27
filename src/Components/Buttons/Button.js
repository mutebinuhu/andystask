import React from 'react';

const Button = ({styles, text, handleClick}) => {
    return (
        <div>
            <button className='bg-gray-100 rounded-3xl px-6 my-3 py-3 mr-2 font-medium'  onClick={handleClick}>{text}</button>
        </div>
    );
}

export default Button;
