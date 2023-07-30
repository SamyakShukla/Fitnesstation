import React from 'react'

import { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {
  const[exercises, setExercises]=useState([]) //we have brought this state to home bcoz changes in these states are going to be reflected across all our applications not just in the search exercises, they are going to be reflected in exercises themselves.
  const[bodyPart, setBodyPart]=useState('all')

  
  return (
    <div>
      <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} /> {/* we could have done this using react context api */}
      </Box>
    </div>
  )
}

export default Home
