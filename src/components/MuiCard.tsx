import { Box, Card , CardContent,Typography, CardActions,Button, CardMedia } from "@mui/material"

export const MuiCard = () => {
  return (
    <Box width='300px'>
     <Card>
        <CardMedia
        component='img'
        height='200'
        image='https://source.unsplash.com/random'
        alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>React Js</Typography>
          <Typography  variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet
             consectetur adipisicing elit. Consequuntur, debitis.
          </Typography>
          
        </CardContent>
        <CardActions>
        <Button size='medium'>Share</Button>
        <Button size='medium'>Delete</Button>

     </CardActions>
     </Card>
     

    </Box>
  )
}
