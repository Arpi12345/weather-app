import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp (){
  
const [WeatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelslike: 39.27,
        humidity: 19,
        temp: 40.14,
        Max_temp : 40.14,
        Min_temp: 40.14,
        weather: "scattered clouds"

});

let UpdateInfo = (NewInfo) =>{
    setWeatherInfo(NewInfo);
}

    return(
        
    <div style={{textAlign: "center"}}>
   <h2>Weather App  by Arpita !</h2>
   <SearchBox UpdateInfo={UpdateInfo}/>
   <InfoBox  info={WeatherInfo}/>
   </div>
   
    )
}