import React from "react";
import './App.css';
import arrow from './img/arrow.png'


function Text(){

    return(
        <div className="texts">
            <h1 className="H1"> Unlimited movies, TV <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
             shows, and more.  </h1>
        
            <h3 className="H3">Watch anywhere. Cancel anytime.</h3><br/>

            <h5 className="H5">Ready to watch? Enter your email to create or restart your membership. </h5>
            <div>
            <div class="input-group">
  <input type="search" class="form-control rounded" className="search" placeholder="Email Address" aria-label="Search" aria-describedby="search-addon" />
  <button style={{marginLeft:'30.6rem',
   marginTop:'-5.6rem',
     width: '14rem', 
     paddingTop:'10px',
     height:'4.2rem', 
     backgroundColor:'red', 
     color:'white',
      fontSize:'1.8rem'}}
       type="button"
        className="btn-btn"
       >Get Started 
           <img className="arrow" src={arrow}/>  </button>

   
       
</div>
            </div>
        </div>
    )
}

export default Text