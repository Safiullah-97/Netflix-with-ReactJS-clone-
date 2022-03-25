import React,{useState} from 'react'
import './App.css';
import useCollapse from 'react-collapsed';
import { CCollapse,CButton,CCardBody,CCard } from '@coreui/react'
import arrow from './img/arrow.png'
function Collapsible5() {
    const [visible, setVisible] = useState(false, "#383838")
    const [bgcolor, setbgcolor]= useState(true, "#383838")


    return (
      
  
<div className='div22_33'>
        <CButton  className='one1_00' onClick= {() =>setVisible(!visible )} >
            Is Netflix good for kids? 
            </CButton>
        <CCollapse  className="one112" visible={visible}>
          <CCard className="one122231">
            <CCardBody >
            The Netflix Kids experience is included in your membership to <br/>
            give parents control while kids enjoy family-friendly TV shows <br/>
             and movies in their own space.<br/>


            Kids profiles come with PIN-protected parental controls that let<br/>
             you restrict the maturity rating of content kids can watch and<br/>
              block specific titles you don’t want kids to see.
            </CCardBody>
          </CCard>
        </CCollapse>    
        <div className='sear'>
<h6 style={{marginLeft:'30%',color:'white',marginTop:'10ch', fontSize:'18px'}}>Ready to watch? Enter your email to create or restart your membership.</h6>
      
        <input type='text'
        className='searchbox1'
        placeholder='Email Address'/>
        <button className='button11' type='button'> Get Started 
        
        <img className='arr' src={arrow}/>
        </button>
            
   
            
        </div>
        </div>

      

    )
          
    }
 

export default Collapsible5