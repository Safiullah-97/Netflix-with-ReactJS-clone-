import React from 'react'
import tv from './img/tv.png'
import './App.css';
import ntf from './img/ntf.jpg'
import line from './img/line.png'

function Second(){
    return(
        <div className='second' >
            {/* <img src={line} alt="dsa"></img> */}
            <div className='secText'>
            <h1 className='H11'>Enjoy on your TV.</h1>
                <h2 className='H31'>Watch on Smart TVs, Playstation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players, and<br/> more.</h2>
            </div>
       
               <div className='tv1'> 
            
           <img className='TV' alt="stack overflow" src={tv}></img> </div>
           <div className='imgintv'>   <img className='pic' src={ntf} alt='img'/></div>
               {/* <img className='Tv' src={TVV} alt="Tv"> </img> */}
             
              
            
             
      <br/>
                

    <br/>    </div>
    )
}

export default Second