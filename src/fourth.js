import React from 'react'
import './App.css';
import fourth from './img/fourth.png'

function Fourth(){
    return(

        <div style={{marginTop:'16rem',marginLeft:'6rem' }}>
          
            <h1 style={{marginTop:'-5rem' }} className='H12'>Create profiles for kids.</h1>
            <h3 className='H32'> Send kids on adventures with their favorite <br/>
             characters in a space made just for them— <br/>
             free with your membership.</h3>
        <div>  <img className='four' src={fourth}/></div>
        </div>
        
    )
}

export default Fourth