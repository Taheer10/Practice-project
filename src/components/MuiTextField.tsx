import { Stack,TextField,InputAdornment } from "@mui/material"
import { useState } from "react"

// TextField is used to add Textfield for text to provide input 

export const MuiTextField = () => {
    const [value, setvalue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={1}>
            <TextField label="enter name" variant="filled"/>
            <TextField label="enter name" variant="outlined"/>
            <TextField label="enter name" variant="standard"/>

        </Stack>

        <Stack direction="row" spacing={1}>
            <TextField label="small" size="small" color="error"/>
        </Stack>

        <Stack direction="row" spacing={1}>
            <TextField label="forminput"value={value}  onChange={(e) => setvalue(e.target.value)}  error={!value} helperText={!value ? "Required": "Dont share your password" }/>
            <TextField label="password" type="password" helperText="Dont share password"/>

        </Stack>

        <Stack direction="row" spacing={1}>
            <TextField label="read only" inputProps={{readOnly:true}}/>
        </Stack>
        
        <Stack spacing={2} direction='row'>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
      </Stack>
        
        


    </Stack>
  )
}
