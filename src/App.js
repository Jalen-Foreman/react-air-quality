import React, {useState} from 'react';
import { Link, Route } from 'react-router-dom';
import LocationData from './components/LocationData';
import LocationForm from './components/LocationForm';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home'
import PMinfo from './components/PMinfo';
import './App.css';



function App() {
  const [quality, setQuality] = useState();
  

  return (
		<div>
			<nav>
				<Link to='/'>Home|</Link>
				<Link to='/PM'>What is a Pariculate Matter (PM)?|</Link>
				<Link to='/contact'>Contact|</Link>
				<Link to='/about'>About|</Link>
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
