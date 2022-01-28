
import {useState} from 'react'
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

  const [showNextButton, setshowNextButton] = useState(true);

  


  const [counter,  setCounter] = useState(1)
  const handleClick = () =>{
    setCounter(counter + 1);
    switch(counter){
      case 1:
            setShowQnOne(false)
            setshowQnTwo(true)
      break;
      case 2:
        setshowQnTwo(false)
        setshowQnFour(true);
        setshowNextButton(false)
        setTimeout(()=>{
        setshowQnFive(true)
        setshowNextButton(true)
        setshowQnFour(false);

        }, 2000)
      break;
      case 3:
        setshowQnFive(false)
      case 4:
        setCountPeople(true);
        setShowLocation(false);
  

      break;
    }
    console.log(counter)
  }
  return (
    <div>
      {/*<Map />
      <Location></Location>
      */}
    <div className="grid place-content-center h-screen relative">
       {showQnOne && <Questionone></Questionone>}
      
      {showQnTwo && <Questiontwo></Questiontwo> }

      {showQnFour && <Questionfour></Questionfour> }
      {showQnFive && <Questionfive></Questionfive> }
      {countPeople && <Noofpeople/>}


    {/*  <div className="absolute bottom-5 w-full">
        <Nextbutton text='Next'></Nextbutton>
      </div>
    */}
    {showLocation && <div><Map></Map><Location></Location></div>}
  <div className="absolute bottom-5 w-full">
        {showNextButton && <Nextbutton text='Next' handleClick={handleClick}></Nextbutton>}
      </div>
    </div>
    </div>
  );
}

export default App;
