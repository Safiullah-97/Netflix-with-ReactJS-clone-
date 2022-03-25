import React, { useState, useEffect, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import MovieList from './MovieList';
import LeftMenu from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import netflix11 from './img/netflix11.png'
// import Design from './Design';
import Text from './text'
import Second from './second'
import Third from './third'
import mobile from './img/mobile.jpg'
import Fourth from './fourth'
import Collapsible from './Faq' 
import Collapsible1 from './faq2' 
import Collapsible2 from './faq3' 
import Collapsible3 from './faq4'
import Collapsible4 from './faq5'
import Collapsible5 from './faq6'
import Foot from './foot';

const App = () => {
return(
	<div className='main'>
		<LeftMenu/>
	
		<div className='BG1' >
		
		<img className='BG' src={netflix11} alt="bg"></img>
		<Text/>
		
		<br/> <br/>	<br/> <br/>	<br/> <br/>	<br/>
		
		</div>
	<div className="blackdiv"><br/> <br/> </div>
	
		<Second/>
		<div className="blackdiv"></div>

		<Third/>
		{/* <img className='mbl' src={mobile}/>    	 */}

			
			<div className="blackdiv"><br/> <br/> </div>
			<h1 className='h111'>Watch everywhere.</h1>
			<h3 className='h333'>Stream unlimited movies and TV shows on </h3>
				<h3  className='h333'>your phone, tablet, laptop, and TV.</h3>
				<br/><br/>
				<div className="blackdiv"><br/> </div>
				<Fourth/><br/>
				<div className="blackdiv"><br/>  </div>
				<Collapsible/>
				<Collapsible1/>
				
		
				<Collapsible2/> 
	<br/>
				<Collapsible3/>

<Collapsible4/>
<br/>
<Collapsible5/>	<br/> <br/>
				<div className="blackdiv"><br/> <br/> </div>
		
		<Foot/>
	</div>
)
}

export default App;