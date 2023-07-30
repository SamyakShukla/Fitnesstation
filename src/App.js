import React from 'react'
import './App.css'

import {Route, Routes} from 'react-router-dom'; //to route between home page and exercise details page

import {Box} from '@mui/material'; // essentially a div with some shading and colors

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Box width="400px" sx={{width: {xl:'1448px'}}} m="auto"> {/* we can write additional css or override system css that comes in mui/system and which can be accessed through sx*/}
        <Navbar /> 
        <Routes>
          
          <Route path="/" element={<Home />} />    {/* element which is going to be rendered when somebody visits 'forward slash'(parent route) will be home component */}
          <Route path="/exercise/:id" element={<ExerciseDetail />} /> {/*id is going to be dynamicLLY RENDERED */}
        </Routes>
        <Footer />
      </Box>
    </div>
  )
}

export default App
