import { Box } from "@mui/material"

//It acts as a raper component for most of css utility needs
export const MuiLayoutBox = () => {
  return (
    <>
    <Box component='span' sx={{
      backgroundColor:'primary.main',
      color:'black',
      height:'200px',
      width:'200px',
      padding:'15px',
      '&:hover': {
        backgroundColor:'primary.light'
      }
    }}>
        Box
    </Box>
    
    <Box display='flex'
         color='black'
         height='200px'
         width='200px'
         padding='15px'
    >

    </Box>

    </>
  )
}
