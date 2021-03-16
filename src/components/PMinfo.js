import React from 'react';
import image from '../AQimage.png'
import '../CSS/PMinfo.css'

const PMinfo = () => {
    return (
			<>
				<p className='PMtext'>
					Air quality can be affected by many different pollutants, but for
					typical air quality measurement, several categories are typically
					used. In most situations, particles are the major consideration. The
					most common measurements are PM 2.5 and PM 10, measured in micrograms
					per cubic meter. PM 2.5 is the concentration of microscopic particles
					less than 2.5 microns in diameter. PM 10 is the concentration of
					microscopic particles less than 10 microns in diameter.
				</p>
				<p className='PMtext'>
					Rather than give people a spreadsheet of all the chemicals in the air
					on a given day, government agencies around the world got together to
					create a single number that would communicate roughly how healthy or
					unhealthy their air was. This spreadsheet below informs you on the
					current Air Quality by displaying different ranges and whatever range
					that current measurement of Air Quality falls in lets us know whether
					he air is good, moderate, unhealthy, or very unhealthy.
				</p>
				<img className='PMimage' src={image} alt='' />
				<a
					className='PMtext'
					href='https://www.extremetech.com/electronics/280956-how-air-quality-and-the-aqi-are-measured#:~:text=The%20most%20common%20measurements%20are,than%202.5%20microns%20in%20diameter'>
					Learn more here.
				</a>
			</>
		);
};

export default PMinfo;