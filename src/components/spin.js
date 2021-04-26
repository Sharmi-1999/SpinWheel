import React, { useState } from 'react'

import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'
import './spin.scss';
import Confetticom from './confetticom';
function Spin(){
  const [win,setWin] = useState(false);
  // let confetti = {
  //   state : false
  // }
  const segments = [
    {
      "seg":['better luck next time',
      'won 70',
      'won 10',
      'better luck next time',
      'won 2',
      'won uber pass',
      'better luck next time',
      'won a voucher'],
      "segcolors":[ '#ffdb4d',
      '#6666ff',
      '#33ccff',
      '#ffb3ff',
      '#d279a6',
      '#b30086',
      '#ffb3ed',
      '#ffb3b3']
    
    }
  ]
  const onFinished = (winner) => {
    if(winner!=="better luck next time")
    {
     setWin(true);
    }
    else{
      setWin(false);
    }
    console.log(win);
    console.log(winner)
    }
  return (
    <div className="container">
      {win && (<Confetticom/>)}
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-md-4 text-center p-4">

      </div>

      <div className=" col-md-6 spinstyle pt-4 ">
    <WheelComponent
      segments={segments[0].seg}
      segColors={segments[0].segcolors}
      winningSegment={segments}
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={290}
      width={221.1}
      height= {222.1}
      position={'absolute'}
      upDuration={100}
      downDuration={150}
      fontFamily='Arial'
    />
    </div>
    <div className="col-md-2">

      </div>
    </div>
    </div>
  )
}

export default Spin;