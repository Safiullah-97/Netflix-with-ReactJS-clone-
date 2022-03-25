import React,{useState} from 'react'
import './App.css';
import useCollapse from 'react-collapsed';
import { CCollapse,CButton,CCardBody,CCard } from '@coreui/react'

function Collapsible3() {
    const [visible, setVisible] = useState(false, "#383838")
    const [bgcolor, setbgcolor]= useState(true, "#383838")


    return (
      <>
  
<div className='div22_33'>
        <CButton  className='one1_00' onClick= {() =>setVisible(!visible )} >How do i cancel?</CButton>
        <CCollapse  className="one112" visible={visible}>
          <CCard className="one12223">
            <CCardBody >
            Netflix is flexible. There are no pesky contracts and no <br/>
            commitments. You can easily cancel your account online in two <br/>
            clicks. There are no cancellation fees – start or stop your<br/>
             account anytime.
            </CCardBody>
          </CCard>
        </CCollapse>
        </div>
      </>
 
    )
          
    }
 

export default Collapsible3