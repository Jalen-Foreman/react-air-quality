import React, {useState} from 'react';
import LocationInfo from './LocationInfo';

const LocationForm = ({quality, setQuality}) => {
	
const [input, setInput] = useState('')
 const handleChange = (e) => {
    setInput(e.target.value);
    
}

 const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://api.waqi.info/feed/${input}/?token=`;
		const apiKey = '8714cf838565c017607ac8aa97bafce5fb5c20aa';	
			fetch(url + apiKey)
				.then((res) => res.json())
				.then((res) => {
					setQuality(res);
				})
				.catch((err) => {
					console.log(err);
				});
		
}

    return (
			<div>
				<form onSubmit={handleSubmit}>
					<h1>Location</h1>
					<input required placeholder='Enter city' onChange={handleChange} />
					<button>Submit</button>
				</form>
				
				<LocationInfo quality={quality} />
			</div>
		);
};

export default LocationForm;