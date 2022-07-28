import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import React, { useState } from "react"

export const MuiCheckbox = () => {
    const [acceptInc, setacceptInc] = useState(false)

    const [skills, setskills] = useState<string[]>([])
    console.log({skills});
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setacceptInc(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setskills([...skills, event.target.value])
        }else {
            setskills(skills.filter((skill) => skill !== event.target.value))
        }
    }

  return (
    <Box>
        <Box>
            <FormControlLabel
            label='I accept terms and Conditions'
            control={<Checkbox checked={acceptInc} onChange={handleChange}/> }
            />
        </Box>
 
        <Box>
            <Checkbox 
            icon={<BookmarkBorderIcon/>}
            checkedIcon={<BookmarkIcon/>}
            checked={acceptInc}
            onChange={handleChange}
            
            />
        </Box>

        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
               
                <FormControlLabel
            label='HTML'
            
            control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange}/> }
            />

            <FormControlLabel
            label='css'
            value='css'
            control={<Checkbox  checked={skills.includes('css')} onChange={handleSkillChange}/> }
            />

            <FormControlLabel
            label='javascript'
            value='javascript'
            control={<Checkbox  checked={skills.includes('javascript')} onChange={handleSkillChange}/> }
            />

                </FormGroup>
            </FormControl>
        </Box>



    </Box>
  )
}
