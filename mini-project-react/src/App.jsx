import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';




function App() {
  return (
    <>
    
      <WeatherApp />
    </>
  )
}

export default App
