import React from 'react'
import './App.css';
import mobile from './img/mobile.jpg'
import st from './img/st.jpg'
import Card from 'react-bootstrap/Card'
import { Image } from "react-bootstrap";
import edit from './img/edit.png'
import LoadingIcons,{Circles} from 'react-loading-icons'

function Third(){
    return(
   
         

            <div className='mbl1'>           
           
           
<div className='ll'>
               
                <h1 className='H12'> Download your shows <br/> to watch offline.</h1>

        <h3 className='H32'>Save your favorites easily and always have <br/> something to watch.</h3>
        
        </div>  
          <img className='edit' src={edit}/>
          <Circles className='gif' />

              {/* <div style={{marginTop:'2rem'}} className='divboxx'>
                   <img className='smallimg' src={st}/>
                   <h5 className='labl'> stranger Things</h5>
                   <h7 className="h7">Downloding...</h7>
                   </div>   
                    */}
                   {/* <Card.Img as={Image} src={st} fluid={true} alt="Card image" /> */}

                   {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mobile} />
  <Card.Body>
  </Card.Body>
</Card> */}      
<div>
</div>
<br/>
        </div>
    )
}

export default Third