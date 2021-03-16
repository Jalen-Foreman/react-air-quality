import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Home.css';


const Home = () => {
    return (
			<div>
				<h1 className='airText'>
					Would you like to be aware of the air your breathing?
				</h1>
				<h2 className='regular'>
					If the answer is yes, then you've come to the right spot.
				</h2>
				<p className='regular'>
					To view the Air Quality of the area you currently reside in, click
					this link below too obtain this vital knowledge.
				</p>
				<Link className='linkLocation' to='/location'>
					Location
				</Link>
			</div>
		);
};

export default Home;