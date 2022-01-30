
import {useState, useEffect} from 'react'
import Questionone from "../src/Components/Qns/QuestionOne";
import Questiontwo from "../src/Components/Qns/Questiontwo";
import Nextbutton from "./Components/Buttons/Nextbutton";
import Location from "../src/Components/Qns/Location";
import Map from "./Components/Qns/Map";
import Questionfour from './Components/Qns/Questionfour';
import Questionfive from './Components/Qns/Questionfive';
import Noofpeople from './Components/Qns/Noofpeople';




function App() {
  const [showQnOne, setShowQnOne] = useState(true);
  const [showQnTwo, setshowQnTwo] = useState(false);
  const [showQnFour, setshowQnFour] = useState(false);
  const [showQnFive, setshowQnFive] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [countPeople, setCountPeople] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false)
  const [showNextButton, setShowNextButton] = useState(true);

  


  const [counter,  setCounter] = useState(0)
  const handleClick = () =>{
   setCounter(counter + 1);
   console.log(counter)
  if(counter === 0){
    setShowQnOne(false)
    setshowQnTwo(true)
  }else if(counter === 1){
    setshowQnTwo(false);
    setshowQnFour(true);
    setShowNextButton(false)
    setTimeout(()=>{
    setshowQnFour(false)
    }, 500)
    setTimeout(()=>{
      setshowQnFive(true)
    setShowNextButton(true)

    }, 500)
    
  }else if(counter === 2){
    setshowQnFive(false)
    setCountPeople(true)
  }else if(counter === 3){
    setCountPeople(false)
    setShowLocation(true)
  }else if(counter === 4){
    setShowLocation(false)
    setConfirmOrder(true);
    window.localStorage.clear();
    setTimeout(()=>{
    setConfirmOrder(false);
    setShowQnOne(true);
    setCounter(0)
    }, 1000)
  }
   
  }
  const dataObject ={

  }
  const individual = window.localStorage.getItem("Individual");
  const family = window.localStorage.getItem("Family");

  const breakfast = window.localStorage.getItem("breakFast");
  const lunch = window.localStorage.getItem("lunch");
  const dinner = window.localStorage.getItem("dinner");


  const mexican= window.localStorage.getItem("Mexican")
  const continental= window.localStorage.getItem("Continental");
  const northindian = window.localStorage.getItem("North Indian");
  const mediterranean = window.localStorage.getItem("mediterranean");

  const adults = window.localStorage.getItem("Adults");
  const children = window.localStorage.getItem("Children")

  



  if(lunch) dataObject.lunch = "lunch";
  if(breakfast )dataObject.breakfast = "Breakfast"
  if(dinner )dataObject.dinner = "Dinner"
  if(individual) dataObject.individual= "Individual"
  if(family) dataObject.individual= "Family"
  if(children) dataObject.children= children;
  if(adults) dataObject.adults= adults;

 

  return (
    <div>
      {/*<Map />
      <Location></Location>
      */}
      {
        showLocation ?
         <div className='grid place-content-center h-screen relative bg-gray-100 '>
            
             <div className='bg-white py-4 px-4'>

          <h3>Please confirm your order ? </h3>
          <p>Your are ordering as :  {dataObject.individual}  {dataObject.family}   </p>
          <p>Your are ordering for :  {dataObject.breakfast}    {dataObject.lunch},  {dataObject.dinner}   </p>
          <p>Your are ordering for <span className='font-medium'>{dataObject.children} Children</span> and <span className='font-medium'>{dataObject.adults} adults </span></p>
             </div>
          <div className="absolute bottom-5 w-full">
         {showNextButton && <Nextbutton text = 'Confirm' handleClick={handleClick}></Nextbutton>}
       </div>
          </div> 
          
          : <div className="grid place-content-center h-screen relative">
        {showQnOne && <Questionone></Questionone>}
       
       {showQnTwo && <Questiontwo></Questiontwo> }
 
       {showQnFour && <Questionfour></Questionfour> }
       {showQnFive && <Questionfive></Questionfive> }
       {countPeople && <Noofpeople/>}
       {confirmOrder && 
       
       <div className=''>
        <div className='text-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
</svg>
        </div>
      <h3 className='text-2xl'>CONFIRMED</h3>
       </div>
       }
 
 
    
   <div className="absolute bottom-5 w-full">
         {showNextButton && <Nextbutton text = {showLocation ? 'Confirm':'Next'} handleClick={handleClick}></Nextbutton>}
       </div>
     </div>
      }
    
    </div>
  );
}

export default App;
