import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3'>H3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>

        <Typography variant='subtitle1'>subtitle1</Typography>
        <Typography variant='subtitle2'>subtitle2</Typography>

        <Typography variant='body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptate iusto aliquam numquam! Illum culpa odit eum quasi, animi optio.</Typography>
        <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptate iusto aliquam numquam! Illum culpa odit eum quasi, animi optio.</Typography>



        


    </div>
  )
}
