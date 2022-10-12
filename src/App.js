import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [currNum, setCurrNum] = useState(0)
  const winningRange = [1,1000];

  const drawLottery = async () => {
    const generateRandom = (low, high) => {
      return Math.floor(Math.random() * high) + low;
    }

    const drawOne = () => {
      const retrievedNumberPromise = new Promise((res, rej) => {
        const drawnNumber = generateRandom(1, 100000)
        setTimeout(res, 100, drawnNumber)
      })
      return retrievedNumberPromise
    }

    for (let i=0; i < 15; i++) {
      const lottery = await(drawOne())
      setCurrNum(lottery)
    }
    if (winningRange[0] <= currNum && currNum <= winningRange[1]) {
      window.alert('You won the lottery!');
    } else {
      window.alert('Too bad! You\'ve lost!')
    }
  }


  return (
    <div className="App">
      <h1>The JavaScript Lottery</h1>
      <h2>Click the button to draw a number.</h2>
      <button className = "btn--lotto focus" onClick = {drawLottery}>Let's Play!</button>
      <h3>Your current: {currNum} </h3>
      <h4>* Any number in the 1 to 1000 range wins!</h4>
    </div>
  );
}

export default App;
