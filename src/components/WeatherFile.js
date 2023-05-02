import React, {useState, useEffect} from 'react';
import axios from 'axios';
const API_KEY = 'dea80d3e63215c4cd527c0a5e045d382';

const API_URL_PORI = `https://api.openweathermap.org/data/2.5/weather?q=Pori&appid=${API_KEY}&units=metric`;
const API_URL_HELSINKI = `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${API_KEY}&units=metric`;
const API_URL_TAMPERE = `https://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=${API_KEY}&units=metric`

export function WeatherPori(props) {
    const [weather, setWeather] = useState(null);
    const [API_URL, setAPI_URL] = useState(API_URL_PORI)
    
    const handleClick = () => {
      setAPI_URL(API_URL_HELSINKI)
    }
    const handleClick2 = () => {
      setAPI_URL(API_URL_PORI)
    }
    const handleClick3 = () => {
      setAPI_URL(API_URL_TAMPERE)
    }
    useEffect(() => {
      axios.get(API_URL)
        .then(response => {
            console.log(response) 
            setWeather(response.data)
    })
        .catch(error => console.log(error));
    }, [API_URL]);
  
    if (!weather) {
      return <div>Loading...</div>;
    }
  
    const { name, main } = weather;
    const { temp, humidity } = main;

    return (
      <div>
        <div class = "painikkeet">
          <button class = "painike1" onClick={handleClick}>
            Helsinki
          </button>
          <button class = "painike2" onClick={handleClick2}>Pori</button>
          <button class = "painike3" onClick={handleClick3}>Tampere</button>
        </div>
        <div>
          <h1>Current weather in {name}</h1>
          <p>Temperature: {temp} Celsius</p>
          <p>Humidity: {humidity}%</p>
          {props.onChange(humidity)}
        </div>
      </div>
    );
  }