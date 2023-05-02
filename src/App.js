
import React, {useState} from 'react';
import Title from './components/Title';
import WeatherFile, {WeatherPori} from './components/WeatherFile';
import Tausta from './components/Tausta';
function App() {
  const [humidity, setHumidity] = useState(0);

  const handleHumidityChange = (newHumidity) => {
    setHumidity(newHumidity)
  }
  return (
    <div className="App">
    <Title></Title>
    <WeatherPori onChange={handleHumidityChange} />
    <Tausta humidity={humidity}/>
    </div>
  );
}

export default App;
