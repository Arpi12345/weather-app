import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import { use } from 'react';


export default function SearchBox ({UpdateInfo}){
    
    let [city, setcity] = useState("");
    let [error, setError] = useState(false);
    const API_URL=import.meta.env.VITE_API_URL;
    const API_KEY=import.meta.env.VITE_API_KEY;

let infoWeather = async () =>{
    try{
let response = await fetch(`${API_URL}?q= ${city}&appid=${API_KEY}&units=metric`);
let jsonresponse = await response.json();
console.log(jsonresponse);

let result ={
    city: city,
    temp: jsonresponse.main.temp,
    Min_temp: jsonresponse.main.temp_min,
    Max_temp: jsonresponse.main.temp_max,
    humidity: jsonresponse.main.humidity,
    feelslike: jsonresponse.main.feels_like,
    weather: jsonresponse.weather[0].description,
}
console.log(result);
return result;
    }catch(err){
        throw err;
    }
}    

let handleChange = (event) =>{
    setcity(event.target.value);

}
let handleSubmit = async (event) =>{
    try{
    event.preventDefault()
    console.log(city);
    setcity("");
    
let NewInfo  = await infoWeather();
UpdateInfo(NewInfo);
} catch(err){
       setError(true);
    }
}

    return(
        <div className='SearchBox'>
            
            <form  onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city}  onChange={handleChange}/>
                <br/>
                <br/>
                <Button variant="contained" type='submit' >Search</Button>
                {error &&  <p style={{color:"red"}}>No Such Place Exists!</p>}
            </form>
        </div>
    )}
