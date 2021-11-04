import React, {useState} from 'react';
import LocationInfo from './LocationInfo';
import '../CSS/LocationInfo.css';


const LocationForm = ({quality, setQuality}) => {
	
const [input, setInput] = useState('');
const [error, setError] = useState(false); 

const handleChange = (e) => {
    setInput(e.target.value);
    
}

 const handleSubmit = (e) => {
    e.preventDefault();
	setError(false);
    const url = `https://api.waqi.info/feed/${input}/?token=`;
		const apiKey = process.env.REACT_APP_APIKEY;	
			fetch(url + apiKey)
				.then((res) => res.json())
				.then((res) => {
					setQuality(res)
					console.log(res);
					if(res.status === 'error') {
						setError(true);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		
}

    return (
			<div>
				<form className='regular' onSubmit={handleSubmit}>
					<h1 className='airText'>Location</h1>
					<input required placeholder='Enter city' onChange={handleChange} />
					<button>Submit</button>
				</form>
				{error === true && (
					<div className='regular'>
						No results found. Please try a valid search.
					</div>
				)}
				<LocationInfo quality={quality} />
			</div>
		);
};

export default LocationForm;