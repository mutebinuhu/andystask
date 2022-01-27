import React from 'react';

const Nextbutton = ({styles, text, handleClick}) => {
    return (
        <div className='text-center'>
            <button  onClick={handleClick} className='bg-yellow-200 px-32 rounded-3xl  py-3 mr-2 font-medium'  onClick={handleClick}>{text}</button>
        </div>
    );
}

export default Nextbutton;
