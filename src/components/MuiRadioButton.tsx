import React, {useState} from 'react'
import { Box, FormControl,FormLabel, FormControlLabel, RadioGroup, Radio  } from '@mui/material'

export const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    console.log(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setValue(event.target.value)
    }
  return (
    <Box>
     
     <FormControl error>
        <FormLabel id='job-experience-group-label'>
            Years Of Experience
        </FormLabel>
        <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange}>
               
               <FormControlLabel control={<Radio size='small' color='secondary'/> } label='0-2' value='0-2'/>
               <FormControlLabel control={<Radio/>} label='3-4' value='3-4'/>
               <FormControlLabel control={<Radio/>} label='5-6' value='5-6'/>


        </RadioGroup>

     </FormControl>

    </Box>
  )
}
