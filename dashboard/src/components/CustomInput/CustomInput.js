import React from 'react'
import TextField from '@mui/material/TextField'

function CustomInput({ ...passProp }) {
    return <TextField size="small" variant="outlined" fullWidth {...passProp} />
}

export default CustomInput
