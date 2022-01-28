import React from 'react';
import Questioncard from './QuestionCard';
import Button from '../Buttons/Button';
import { useState } from 'react';


const Noofpeople = () => {
    const[adults,  setAdults] = useState(0)
    const[children,  setChildren] = useState(0)
    const[counter, setCounter] = useState(0)
     const handleAddAdults = () =>{
        setAdults(adults + 1)
     }
     const handleMinusAdults = () =>{
        setAdults(adults - 1)
     }
     const handleAddChildren = () =>{
        setChildren(children + 1)
     }
     const handleMinusChildren = () =>{
        setChildren(children - 1)
     }
    return (
            <div className=''>
              <div className='flex justify-center font-medium'>
              <Questioncard question='How many people are you ordering for?' />
              </div>
              
              <div className='flex justify-center flex-wrap  mt-10'>
                <button className='bg-gray-100 rounded-3xl px-6 my-3 py-3 mr-2 bg-yellow-200 font-medium'> <div className='flex space-x-2'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"  onClick={handleAddAdults}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg><span> <span>{adults}</span> Adults</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 12H6"  onClick={handleMinusAdults} />
                        </svg></div>
                </button>
                <button className='bg-gray-100 rounded-3xl px-6 my-3 py-3 mr-2 bg-yellow-200 font-medium'> <div className='flex space-x-2'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 6v6m0 0v6m0-6h6m-6 0H6" onClick={handleAddChildren} />
                    </svg><span>{children}</span><span>Children</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" strokeWidth={4} d="M18 12H6" onClick={handleMinusChildren} />
                    </svg></div>
                </button>

              </div>
            </div>
        );
    
}

export default Noofpeople;

