import React from 'react';

const Questioncard = ({question, answer}) => {
    return (
        <div>
            <h2 className='text-3xl px-2 text-center'>{question}</h2>
            <div>{answer}</div>
        </div>
    );
}

export default Questioncard;
