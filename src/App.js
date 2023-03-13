
import { useEffect, useState } from 'react';
import './App.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)]
  }
  return color
} 

function App() {
  const [color, setColor] = useState("")
  const [answers, setAnswers] = useState([])
const [isCorrect , setIsCorrect]= useState(false)
const [isWrong , setIsWrong]= useState(false)
function generateColor(){
  const actualColor= getRandomColor()
  setColor(actualColor)
  setAnswers([actualColor, getRandomColor(),getRandomColor()].sort(() => Math.random() - 0.5))
}

  useEffect(() =>{
  generateColor()
  }, [])
  
  function handleAnswers (answer){
if(answer === color){
  generateColor()
  setIsCorrect(true)
setTimeout(() => {
  setIsCorrect(false)
}, 1000);


}
else{
setIsWrong(true)
setTimeout(() => {
  setIsWrong(false)
}, 1000);
}
  }
  return (
    <div className="App">
 <div className='color' style={{backgroundColor:`${color}` }}></div>
 <div className='answers'>
{answers?.map((answer,i)=>
  <button key={i} onClick={() => handleAnswers(answer)}>{answer}</button>
  )}
   </div>
  <div className={ `${isCorrect ? "correct" :""}`}>{isCorrect ? "Yay is correct" : ''}</div>
<div className={ `${isWrong ? "wrong" :""}`}>{isWrong ? "nope wrong" : ''}</div>
    </div>
  );
}

export default App;
