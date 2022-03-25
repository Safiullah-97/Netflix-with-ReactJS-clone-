import React,{useState} from 'react'
import './App.css';
import useCollapse from 'react-collapsed';
import { CCollapse,CButton,CCardBody,CCard } from '@coreui/react'

function Collapsible1() {
    const [visible, setVisible] = useState(false, "#383838")
    const [bgcolor, setbgcolor]= useState(true, "#383838")


    return (
      <>
  
<div className='div22'>
        <CButton  className='one1_00' onClick= {() =>setVisible(!visible )} >How much does Netflix cost?</CButton>
        <CCollapse   className="one11" visible={visible}>
          <CCard className="one122">
            <CCardBody >
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or<br/>
             streaming device, all for one fixed monthly fee. Plans range <br/>
              from Rs250 to Rs1,100 a month. No extra costs, no contracts.
            </CCardBody>
          </CCard>
        </CCollapse>
        </div>
      </>
 
    )
          
    }
 

export default Collapsible1