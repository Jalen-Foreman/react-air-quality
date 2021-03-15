import React from 'react';

const LocationInfo = ({ quality }) => {
    
    return (
    <div>
         {quality ? quality['data'].forecast.daily.pm10.map(PM => {
        return (
        <>
        <h1>PM10 forecast for the week</h1>
        <div key={PM.avg}>
         <p>avg: {PM.avg}</p>
         <p>day: {PM.day}</p>
         <p>max: {PM.max}</p>
         <p>min: {PM.min}</p>
        </div>
        </>
      );
        }) : null}
        {quality ? quality['data'].forecast.daily.pm25.map(PM => {
            return (
        <>
            <h1>PM2.5 forecast for the week</h1>
            <div key={PM.avg}>            
            <p>avg: {PM.avg}</p>
            <p>day: {PM.day}</p>
            <p>max: {PM.max}</p>
            <p>min: {PM.min}</p>
            </div>
        </>
      );
        }) : null}
  </div>
    );

    
};

export default LocationInfo;