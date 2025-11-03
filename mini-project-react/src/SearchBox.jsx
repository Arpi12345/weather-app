import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';



export default function SearchBox ({UpdateInfo}){
    
    let [city, setcity] = useState("");
    let [error, setError] = useState(false);
    const API_URL=import.meta.env.VITE_API_URL;
    const API_KEY=import.meta.env.VITE_API_KEY;

let infoWeather = async () =>{
    try{
   setError(false);
let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
let jsonresponse = await response.json();
console.log(jsonresponse);
if (jsonresponse.cod === "404" || jsonresponse.cod === 404) { setError(true); return null; }

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
setError(false);
return result;
    }catch(err){
        throw err;
    }
}    

let handleChange = (event) =>{
    setcity(event.target.value);
    setError(false);

};
 let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);

            let NewInfo = await infoWeather();
            if (NewInfo) {
                UpdateInfo(NewInfo);
                setcity(""); // ✅ clear input after success
            }
        } catch (err) {
            setError(true);
        }
    };


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
