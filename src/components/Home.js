import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
			<div>
				<h1>Would you like to be aware of the air your breathing?</h1>
				<h2>If the answer is yes, then you've come to the right spot.</h2>
				<p>
					To view the Air Quality of the area you currently reside in, click
					this link below too obtain this vital knowledge.
				</p>
				<Link to='/location'>Location</Link>
			</div>
		);
};

export default Home;