import { Stack,Button, IconButton, ButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
    <Stack spacing={2}>
    <Stack spacing={2} direction='row'>
        <Button variant="text" href="https://google.com">Text</Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>

    </Stack>
     
     <Stack spacing={2} direction='row'>
        <Button variant="contained" color="primary" >Primary</Button>
        <Button variant="text" color="secondary" >secondary</Button>
        <Button variant="contained" color="error" >error</Button>
        <Button variant="outlined" color="warning" >warning</Button>
        <Button variant="contained" color="success" >success</Button>

     </Stack>

     <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>

     </Stack>

     <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={() => alert('hello')}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
      <IconButton aria-label="send" color='error' size='small'><SendIcon/></IconButton>
     </Stack>

     <Stack direction='row'>
      <ButtonGroup variant="contained" orientation="vertical" size="small" color='secondary' arial-label='alignment button group'>
      <Button >Left</Button>
      <Button >Center</Button>
      <Button >Right</Button>
      </ButtonGroup>
     </Stack>

    </Stack>
  )
}
