import React from 'react';
import Questioncard from './QuestionCard';
import Button from '../Buttons/Button';
import { useState } from 'react';


const Questionone = () => {
    const [click, setClick] = useState(false);

    const handleClick = () =>{
        if(click){
            setClick(false)
        }else{
            setClick(true)

        }
    }
    return (
        <div className=''>
          <div className='flex justify-center font-medium'>
          <Questioncard question='Who are you ordering for' />
          </div>
          <div className='flex justify-center mt-10'>
            <Button  text='Individual' />
            <Button   text='Family' />

          </div>
        </div>
    );
}

export default Questionone;
