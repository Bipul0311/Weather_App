import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Wapp from  "./components/Wapp";
import Form from './components/Form';


const API_key = "4328e9905e7197631c06527b5c70e239";

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      city:undefined,
      country:undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error:false,
    };
    
  }
    calCelsius(temp){
      let cell = Math.floor( temp-273.5);
      return cell;
    }
  

  getWeather = async(e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
  

    const response = await api_call.json();
    console.log(response);

    this.setState({
      city:`${response.name},${response.sys.country}`,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
      error:false,
    });
  }else{
    this.setState({error:true});
  }

  }

  state = {}
  render(){
    return(

      <div className="App">
      <Form loadweather = {this.getWeather} error={this.state.error}/>
      <Wapp 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius ={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}


      />
      </div>
   
    );
  }
}

export default App;
