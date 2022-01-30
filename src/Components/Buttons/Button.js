import React from 'react';

const Button = ({styles, text, handleClick,id, value}) => {
    return (
        <div>
            {/*<button className='bg-gray-100 rounded-3xl px-6 my-3 py-3 mr-2 font-medium' id={id} value={value} onClick={handleClick}>{text}</button>
*/}
            <button className={styles} onClick={handleClick} value={value} >{text}</button>
         
        </div>
    );
}

export default Button;
