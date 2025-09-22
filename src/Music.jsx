import React, { useEffect, useState } from 'react'
import './Music.css'
import songimage from './Phtots/fun-party-with-dj (3).jpg';
import play from './Phtots/play_arrow_55dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png';
import next from './Phtots/skip_next_55dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png';
import pre from './Phtots/skip_previous_55dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png'
export const Music = () => {
  const [index,setindex]=useState();
  var abc=0;

        setInterval(()=>{
           abc=abc+1;
           if(abc==100){
             abc=0;
           }
           setindex(abc);
           console.log(abc);
           return clearInterval(()=>abc)
        },1000)
        
  return (
   <>
     <div className='box'>
        <img className='image' src={songimage} alt="" />
        <h4>Music name</h4>
        <p>Type of music</p>
        <audio src="" controls>
          <source src="x:\music\18.En Anbe Enn Anbe - Shankar Mahadevan.mp3" type="" />
        </audio>
        <input type="range" value={index}   name="" id="" />
        <div className='control'>
            <img src={pre} alt="" />
            <img src={play} alt="" />
            <img src={next} alt="" />
        </div>
     </div>
   </>
  )
}
