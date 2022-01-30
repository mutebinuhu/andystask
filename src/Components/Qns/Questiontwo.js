import React from 'react';
import Questioncard from './QuestionCard';
import Button from '../Buttons/Button';
import { useState } from 'react';

const Questiontwo = () => {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("")
  const [dinner, setDinner] = useState("")
  const [selectBreakfast, setSelectBreakfast] = useState(false)
  const [selectLunch, setSelectLunch] = useState(false);
  const [selectDinner, setSelectDinner] = useState(false);



  const handleSelectBreakFast = () =>{
   if(!selectBreakfast){
    setSelectBreakfast(true);
    window.localStorage.setItem("breakFast", true)
   }else{
     setSelectBreakfast(false);
     window.localStorage.removeItem("breakFast");
   }

  }

  const handleSelectLunch = () =>{
   if(!selectLunch){
    setSelectLunch(true)
    window.localStorage.setItem("lunch", true)
   }else{
    setSelectLunch(false)
    window.localStorage.removeItem("lunch")
   }

  }
  const handleSelectDinner = () =>{
    if(!selectDinner){
      setSelectDinner(true);
      window.localStorage.setItem("dinner", true)
    }else{
      setSelectDinner(false)
      window.localStorage.removeItem("dinner")
    }
  }

  
    return (
        <div className=''>
        <div className='flex justify-center font-medium'>
        <Questioncard question='What meals would you like to order?
' />
        </div>
        <div className='flex justify-center mt-10 '>
          <Button  text='Breakfast' handleClick={handleSelectBreakFast} styles={selectBreakfast ? 'focus:outline-none  h-10 w-32 bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none  h-10 w-32 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' } />
          <Button  text='Lunch' handleClick={handleSelectLunch}  styles={selectLunch ? 'focus:outline-none  h-10 w-28  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none  h-10 w-28 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' }  />
          <Button  text='Dinner' handleClick={handleSelectDinner}  styles={selectDinner ? 'focus:outline-none   h-10 w-32  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none  h-10 w-32 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' }  />
          
          <div className='block'>
            
          </div>
        </div>
      </div>
    );
}

export default Questiontwo;
