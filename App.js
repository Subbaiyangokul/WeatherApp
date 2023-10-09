import React, {useState} from "react";
import axios from "axios";
import './App.css';

function App() {

  const [data , setData] = useState({});
  const [location,setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f07e75d8d8bada47bdec560d8226bc91`

  // const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=f07e75d8d8bada47bdec560d8226bc91`
  
  const searchlocation = (event) => {
    if (event.key === "Enter"){
      axios.get(url).then((response) => {setData(response.data)
      console.log(response.data)})
      setLocation("")
    }
    
  }
  return (
    <div className="app">
      <div className="search">
      <input className="input" value = {location}type="text" placeholder="Enter the location" 
      onChange={event =>{setLocation(event.target.value)}}
      onKeyPress = {searchlocation}/>
      </div>
      <div className = "container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temperature">
           {data.main ? <h1>{Math.floor(data.main.temp-273)}&deg;c</h1> : null}
          </div>
          <div className="description">
             {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && 
        <div className="bottom">
        <div className="feels">
        {data.main ? <p className="bold">{Math.floor(data.main.feels_like-273)}°C</p> : null}
          <p >Feels Like</p>
        </div>
        <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p >Humidity</p>
        </div>
        <div className="wind">
        {data.wind? <p className="bold">{data.wind.speed}mph</p> : null}
          <p >Wind Speed</p>
        </div>
      </div>
        }
       
      </div>
      

    </div>
  );
}

export default App;
