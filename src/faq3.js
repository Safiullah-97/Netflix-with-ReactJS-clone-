import React,{useState} from 'react'
import './App.css';
import useCollapse from 'react-collapsed';
import { CCollapse,CButton,CCardBody,CCard } from '@coreui/react'

function Collapsible2() {
    const [visible, setVisible] = useState(false, "#383838")
    const [bgcolor, setbgcolor]= useState(true, "#383838")


    return (
      <>
  
<div className='div22_3'>
        <CButton  className='one1_00' onClick= {() =>setVisible(!visible )} >Where can i watch?</CButton>
        <CCollapse  className="one11" visible={visible}>
          <CCard className="one1222">
            <CCardBody >
           Watch anywhere, anytime. Sign in with your Netflix account to <br/>
           watch instantly on the web at netflix.com from your personal <br/>
           computer or on any internet-connected device that offers the <br/>
           Netflix app, including smart TVs, smartphones, tablets,<br/>
           streaming media players and game consoles.<br/>
           You can also download your favorite shows with the iOS, <br/>
           Android, or Windows 10 app. Use downloads to watch while <br/>
            you're on the go and without an internet connection. Take<br/>
             Netflix with you anywhere.
            </CCardBody>
          </CCard>
        </CCollapse>
        </div>
      </>
 
    )
          
    }
 

export default Collapsible2