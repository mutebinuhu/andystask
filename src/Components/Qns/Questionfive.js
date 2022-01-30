import React from 'react';
import Questioncard from './QuestionCard';
import Button from '../Buttons/Button';
import { useState, useEffect } from 'react';

const Questionfive = () => {
  const [selectContinental, setSelectContinental] = useState(false);
  const [selectedContinental, setSelectedContinental] = useState("Continental");

  const [selectNorthIndian, setSelectNorthIndian] = useState(false)
  const [selectedNorthIndian, setSelectedNorthIndian] = useState("North Indian");

  const [selectMexican, setSelectMexican] = useState(false);
  const [selectedMexican, setSelectedMexican] = useState("Mexican");

  const [selectMediterranean, setSelectMediterranean] = useState(false);
  const [selectedMediterranean, setSelectedMediterranean] = useState("mediterranean");


  const  handleSelectContinental = () =>{
    if(!selectContinental){
      setSelectContinental(true)
      window.localStorage.setItem(selectedContinental, true)
    }else{
      setSelectContinental(false);
      window.localStorage.removeItem(selectedContinental)
    }
  }
  const handleSelectedNorthIndian = () =>{
    if(!selectNorthIndian){
      setSelectNorthIndian(true);
      window.localStorage.setItem(selectedNorthIndian, true)
    }else{
      setSelectNorthIndian(false);
      window.localStorage.removeItem(selectedNorthIndian)

    }
  }
  const handleSelectedMexican = () =>{
    if(!selectMexican){
      setSelectMexican(true);
      window.localStorage.setItem(selectedMexican, true)
    }else{
      setSelectMexican(false);
      window.localStorage.removeItem(selectedMexican)

    }
  }

  const handleSelectedMediteranean = () =>{
    if(!selectMediterranean){
      setSelectMediterranean(true)
      window.localStorage.setItem(selectedMediterranean, true)

    }else{
      setSelectMediterranean(false)
      window.localStorage.removeItem(selectedMediterranean)
    }
  }

    return (
        <div className=''>
          <div className='flex justify-center font-medium'>
          <Questioncard question='What are your favorite cuisines?' />
          </div>
          <div className='text-center mt-5 text-gray-500'>
            <h3>Cuisine you could eat 5 days in a week.</h3>

          </div>
          <div className='flex justify-center flex-wrap  mt-10'>
            <Button  text='Continental' styles={selectContinental ? 'focus:outline-none  h-10 w-40  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none  h-10 w-40 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium'} handleClick={handleSelectContinental} />
            <Button   text='North Indian'  styles={selectNorthIndian ? 'focus:outline-none  h-10 w-40  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none  h-10 w-40 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium'} handleClick={handleSelectedNorthIndian}   />
            <Button   text='Mexican'  styles={selectMexican ? 'focus:outline-none md:mt-0 mt-5 h-10 w-40  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none md:mt-0 mt-5 h-10 w-40 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium'} handleClick={handleSelectedMexican}  />
            <Button   text='mediterranean'  styles={selectMediterranean ? 'focus:outline-none md:mt-0 mt-5 h-10 w-40  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none md:mt-0 mt-5 h-10 w-40 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium'} handleClick={handleSelectedMediteranean}  />
           {/*<Button   text='South Indian' />
            <Button   text='Italian' />
            <Button   text='Chinese' />
            <Button   text='Middle Eastern' />

    */}
          </div>
        </div>
    );
}

export default Questionfive;
