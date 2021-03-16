import React, {useState} from 'react';
import { Link, Route } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home'
import PMinfo from './components/PMinfo';
import './CSS/App.css';



function App() {
  const [quality, setQuality] = useState();
  

  return (
		<div>
			<nav className='navBar'>
				<Link className='navBar-option' to='/'>Home</Link>
				<Link className='navBar-option' to='/PM'>What is a Pariculate Matter (PM)?</Link>
				<Link className='navBar-option' to='/contact'>Contact</Link>
				<Link className='navBar-option' to='/about'>About</Link>
			</nav>
			
			<main>
				<Route
					path='/location'
					exact
					render={() => (
						<LocationForm
							quality={quality}
							setQuality={setQuality}
						/>
					)}
				/>
				<Route
					path='/location/:city'
					exact
					render={(routerProps) => (
						<LocationForm
							match={routerProps.match}
							quality={quality}
							setQuality={setQuality}
						/>
					)}
				/>
				<Route path='/' exact component={Home} />
				<Route path='/PM' exact component={PMinfo} />
				<Route path='/contact' component={Contact}/>
				<Route path='/about' component={About}/>
			</main>
		</div>
	);
}

export default App;
