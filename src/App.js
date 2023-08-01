import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const url=`http://api.weatherapi.com/v1/current.json?key=6856ad16230645afb3a203128230108&q=Nagpur&aqi=no`;
  const [temp,setTemp]=useState(0);
  const [humidity,setHumidity]=useState(0);
  const [gust_kph,setGust_kph]=useState(0);
  
  

  useEffect(()=>{
    const fetchData=async()=>{
      const result=await fetch(url);
      result.json().then(json=>{
        setTemp(json.current.temp_c)
        setHumidity(json.current.humidity)
        setGust_kph(json.current.gust_kph)
        console.log(json);

      })
      //humidity
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <h1>Nagpur Temperature Now: {temp} C</h1>
      <h1>Nagpur Today humidity Now: {humidity} </h1>
      <h1>Nagpur Today Wind Now: {gust_kph} </h1>
      
      
    </div>
  );
}

export default App;
