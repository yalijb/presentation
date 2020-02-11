import React from 'react';
import './App.css';
import {Link as LinkScroll, Element} from "react-scroll";
import Header from "./components/Header";
import Howami from './components/Howami';
import Worked from "./components/Worked";
		   	
class App extends React.Component  {

	scroll(acomponent, goesTo){
		return(
			<LinkScroll
			activeClass="active"
			to={goesTo}
			spy={true}
			smooth={true}
			offset={-70}
			duration= {500}
		>
			{acomponent}
		</LinkScroll>
		)
	}

	render(){
		return (
				<div className="App">
					<Header scroll={this.scroll}/>
					<Howami/>
					<Worked/>		
					
				</div>	
		);
	}
}

export default App;
