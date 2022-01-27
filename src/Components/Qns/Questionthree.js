import React from 'react';
import Questioncard from './QuestionCard';
import Button from '../Buttons/Button';
import { useState } from 'react';

const Questionthree = () => {
    return (
        <div className=''>
        <div className='flex justify-center font-medium'>
        <Questioncard question='What meals would you like to order?
' />
        </div>
        <div className='flex justify-center mt-10'>
          <Button  text='Breakfast' />
          <Button  text='Lunch' />
          <Button   text='Dinner' />
          <div className='block'>
          </div>
        </div>
      </div>
    );
}

export default Questionthree;
