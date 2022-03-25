import React,{useState} from 'react'
import './App.css';
import useCollapse from 'react-collapsed';
import { CCollapse,CButton,CCardBody,CCard } from '@coreui/react'

function Collapsible() {
    const [visible, setVisible] = useState(false, "#383838")
    const [bgcolor, setbgcolor]= useState(true, "#383838")
        // setVisible("#383838")
    //  const isBackgroundRed = true;



// let styles= backgroundColor='#383838'


    return (
      <>
        {/* <CButton href="#" onClick={(event) => {
          event.preventDefault()
          setVisible(!visible)
        }}>
          Link
        </CButton> */}

<h1 className='H112'>Frequently Asked Questions</h1>

        <CButton  className='one' onClick= {() =>setVisible(!visible )} >What is Netflix?</CButton>
        <CCollapse   className="one11" visible={visible}>
          <CCard className="one12">
            <CCardBody >
            Netflix is a streaming service that offers a wide variety of<br/>
            award-winning TV shows, movies, anime, documentaries, and <br/> more on thousands of internet-connected devices.<br/><br/>
            You can watch as much as you want, whenever you want<br/>
            without a single commercial – all for one low monthly price.<br/>
            There's always something new to discover and new TV shows <br/> and movies are added every week!
            </CCardBody>
          </CCard>
        </CCollapse>

       
      </>
      
    )
          
    }
 

export default Collapsible