import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";

    
export default function InfoBox({info}){
    const RAIN_URL= import.meta.env.VITE_RAIN_URL;
    const COLD_URL=import.meta.env.VITE_COLD_URL;
    const HOT_URL =import.meta.env.VITE_HOT_URL;
       
let AddWInfo = (info) =>{
    setinfo((currdata) =>
    [...currdata, info[0]])
console.log("added new data")
};

    return(
        <div className="infobox">
         
          <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp; {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon /> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min_Temp = {info.Min_temp}&deg;C</p>
         <p>Max_temp = {info.Max_temp}&deg;C</p>
         <p>The Weather can be description as <i>{info.weather}</i> and feels like {info.feelslike}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    )
}