import React from 'react'
import { useContext } from 'react';
import {Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow=()=>{
  const {scrollPrev}=useContext(VisibilityContext);

  return(
    <Typography onClick={()=>scrollPrev()} className='right-arrow' >
      <img src={LeftArrowIcon}/>
    </Typography>

  );
}

const RightArrow=()=>{
  const {scrollNext}=useContext(VisibilityContext);

  return(
    <Typography onClick={()=>scrollNext()} className='left-arrow' >
      <img src={RightArrowIcon}/>
    </Typography>

  );
}

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {data.map((eachItem)=>(
      <Box
        key={eachItem.id || eachItem}
        itemId={eachItem.id || eachItem}
        title={eachItem.id || eachItem}
        m='0 40px'

      >
      {isBodyParts ?  <BodyPart item={eachItem}
        bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={eachItem} /> }
      </Box>
      )
      )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
