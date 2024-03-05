import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const[timeLeft,setTimeLeft]=useState(calculateTimeLeft())

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setTimeLeft(calculateTimeLeft());
        },1000);
        return()=>clearTimeout(timer);
    })
    function calculateTimeLeft(){
        const difference = +new Date("2024-03-18") - +new Date();
        let timeLeft ={};

        if(difference > 0){
            timeLeft={
                days:Math.floor(difference/(1000 * 60 * 60 * 24)),
                     //floor=to rounded the values
                hours:Math.floor((difference /(1000 * 60 * 60))% 24),
                minutes:Math.floor((difference /1000 /60) % 60),
                seconds :Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }
    const timerComponent = Object.keys(timeLeft).map((intervel)=>{
        if(!timeLeft[intervel]){
            return null;
        }
        return(
            <span className='text-[#6a00ff] text-[20px]'>
                {timeLeft[intervel]}{intervel}
            </span>
        )
    })
  return (
    <div>
        {timerComponent.length ? (
            <span className='flex gap-5'>
                {timerComponent}
            </span>
        ):(
            <span className='text-[red] text-[25px]'>Time's Up</span>
        )}
    </div>
  )
}

export default CountDown