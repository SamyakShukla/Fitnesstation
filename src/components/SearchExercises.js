import React from 'react'
import { useEffect, useState } from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const[search, setSearch]=useState('');
  // const[exercises, setExercises]=useState([])

  const [bodyParts, setBodyParts]=useState([])
  //useEffect is used to fetch the exercise categories as soon as page loads

  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData]);
      
      // console.log(bodyParts)
    }
    fetchExercisesData();
  },[])

  const handleSearch=async()=>{
    if(search){
      const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions ); //these options are going to authorize our request because we added our own api key
      const searchedExercises=exercisesData.filter( (exercise)=>exercise.name.toLowerCase().includes(search) 
      || exercise.bodyPart.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      );
      // console.log(exercisesData)
      setSearch('');
      setExercises(searchedExercises);
    }

  }
  return (
    
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px' >
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}} mb='50px' textAlign='center' >
      Exercises you should know <br />
      that are awesome
      </Typography>
      <Box position='relative' mb='72px' >
        <TextField
        sx={{
          height:'40px',
          input:{fontWeight:'300', border:'none', borderRadius:'4px' },
          width:{lg:'800px', xs:'350px'},
          borderRadius:'40px'
        }}
        value={search} 
        onChange={(e)=>setSearch(e.target.value.toLowerCase())} 
        placeholder='Search Exercises'
        type='text' />
        <Button className='search-btn'
        sx={{backgroundColor:'#FF2625', color:'#FFF', 
        textTransform:'none', width:{lg:'175px', xs:'80px'},
        fontSize:{lg:'20px', xs:'14px'},
        height:'56px', position:'absolute', right:'0'  }}
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', padding:'20px'}} >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts /> {/*bodyPart is going to be the selected bodyPart, the one which we clicked  */}
      </Box>
    </Stack>
    
  )
}

export default SearchExercises
