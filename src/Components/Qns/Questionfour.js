
import React from 'react';
import Questioncard from './QuestionCard';
import Button from '../Buttons/Button';
import { useState } from 'react';

const Questionfour = () => {
    return (
        <div className=''>
          <div className='flex justify-center font-medium'>
          <Questioncard question='Let’s learn more about how you like your meals' />
         
          </div>
          <div className='flex justify-center mt-5 transition'>
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
          </div>    
        </div>
    );
}

export default Questionfour;
