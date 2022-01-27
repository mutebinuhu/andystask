import React from 'react';
import Questioncard from './QuestionCard';
import Button from '../Buttons/Button';
import { useState } from 'react';
const Questionfive = () => {
    return (
        <div className=''>
          <div className='flex justify-center font-medium'>
          <Questioncard question='What are your favorite cuisines?' />
          </div>
          <div className='text-center mt-5 text-gray-500'>
            <h3>Cuisine you could eat 5 days in a week.</h3>

          </div>
          <div className='flex justify-center flex-wrap  mt-10'>
            <Button  text='Continental' />
            <Button   text='North Indian' />
            <Button   text='Mexican' />
            <Button   text='mediterranean' />
            <Button   text='South Indian' />
            <Button   text='Italian' />
            <Button   text='Chinese' />
            <Button   text='Middle Eastern' />
          </div>
        </div>
    );
}

export default Questionfive;
