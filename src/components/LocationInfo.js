import React from 'react';

const LocationInfo = ({ quality }) => {
    if (!quality) { 
      return <div className='regular'>loading...</div>;
    }
    return (
			<div className='grid'>
				{quality['data'].forecast
					? quality['data'].forecast.daily.pm10.map((PM) => {
							return (
								<div className='grid-item'>
									<h1>PM10 forecast for the week</h1>
									<div key={PM.avg}>
										<p className='info-text'>avg: {PM.avg}</p>
										<p className='info-text'>day: {PM.day}</p>
										<p className='info-text'>max: {PM.max}</p>
										<p className='info-text'>min: {PM.min}</p>
									</div>
			 				 </div>
							);
					  })
					: null}
				{quality['data'].forecast
					? quality['data'].forecast.daily.pm25.map((PM) => {
							return (
								<div className='grid-item'>
									<h1>PM2.5 forecast for the week</h1>
									<div key={PM.avg}>
										<p className='info-text'>avg: {PM.avg}</p>
										<p className='info-text'>day: {PM.day}</p>
										<p className='info-text'>max: {PM.max}</p>
										<p className='info-text'>min: {PM.min}</p>
									</div>
							</div>
							);
					  })
					: null}
			</div>
		);

    
};

export default LocationInfo;