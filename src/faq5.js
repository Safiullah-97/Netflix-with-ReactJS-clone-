import React,{useState} from 'react'
import './App.css';
import useCollapse from 'react-collapsed';
import { CCollapse,CButton,CCardBody,CCard } from '@coreui/react'

function Collapsible4() {
    const [visible, setVisible] = useState(false, "#383838")
    const [bgcolor, setbgcolor]= useState(true, "#383838")


    return (
      <>
  
<div className='div22_331'>
        <CButton  className='one1_00' onClick= {() =>setVisible(!visible )} >What can I watch on Netflix</CButton>
        <CCollapse  className="one112" visible={visible}>
          <CCard className="one12223">
            <CCardBody >
            Netflix has an extensive library of feature films, documentaries,<br/>
             TV shows, anime, award-winning Netflix originals, and more.<br/>
              Watch as much as you want, anytime you want.
            </CCardBody>
          </CCard>
        </CCollapse>
        </div>
      </>
 
    )
          
    }
 

export default Collapsible4