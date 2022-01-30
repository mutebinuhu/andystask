import React from 'react';
import Questioncard from './QuestionCard';
import Button from '../Buttons/Button';
import { useState, useEffect } from 'react';


const Questionone = () => {
    const [click, setClick] = useState(false);
    const [family, setFamily] = useState("Family");
    const [individual, setIndividual] = useState('Individual');
    const [selectFamily, setSelectFamily] = useState(false)
    const [selectIndividual, setSelectIndividual] = useState(false)


    const handleSelectFamily = () =>{
      if(!window.localStorage.getItem("Individual")){
        if(!selectFamily){
          setSelectFamily(true)
          setFamily("Family")
          window.localStorage.setItem("Family", true)
        }else{
          setSelectFamily(false)
          window.localStorage.removeItem("Family")
  
        }
      }
    }

    const handleSelectIndividual = () =>{
     if(!window.localStorage.getItem("Family")){
      if(!selectIndividual){
        setSelectIndividual(true)
        setIndividual("Individual")
      window.localStorage.setItem("Individual", true)
      }else{
        setSelectIndividual(false)
        window.localStorage.removeItem("Individual")
      }
     }
    }
    useEffect(() => {
    if(window.localStorage.getItem("Family")){
      setSelectFamily(true)
    }
    if(window.localStorage.getItem("Individual")){
      setSelectIndividual(true)
    }
    }, []);

    return (
        <div className=''>
          <div className='flex justify-center font-medium'>
          <Questioncard question='Who are you ordering for ?' />
          </div>
         {/* <div className='flex justify-center mt-10'>
            <Button  text='Individual' handleClick={handleIndividualSelect} value={individual} id="uo"/>
            <Button  text='Family' handleClick={handleFamilySelect} value={family} />
          </div>


    */}
         <div className=''>
         <form action="" onSubmit={(e)=>e.preventDefault()}>
              <div  className='flex justify-center mt-10'>
             
                {/*<button className={selectFamily ? 'focus:outline-none  h-10 w-40  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none  h-10 w-40 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' } onClick={handleSelectFamily} >Family</button>
                */}
            <Button styles={selectIndividual  ? 'focus:outline-none  h-10 w-40  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none  h-10 w-40 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' } text="test" text="Individual" handleClick={handleSelectIndividual}/>
         
         
         <Button styles={selectFamily ? 'focus:outline-none  h-10 w-40  bg-yellow-200 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' : 'focus:outline-none  h-10 w-40 border-gray-100 bg-gray-100 text-center  py-2  text-black-500 rounded-3xl  mr-2 font-medium' } text="Family" handleClick={handleSelectFamily} value={family} />

              </div>
              <button></button>
            </form>
         </div>
        </div>
    );
}

export default Questionone;
