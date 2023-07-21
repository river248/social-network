import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Stack, Button, IconButton, InputAdornment, Typography } from '@mui/material'

import { CustomStyles } from './Login.style'
import CustomInput from '../../components/CustomInput'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <CustomStyles onSubmit={handleSubmit}>
            <Stack sx={{ width: '100%' }} spacing={1}>
                <Typography variant="h3" align="center" gutterBottom>
                    LOGIN
                </Typography>
                <CustomInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    inputProps={{ pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$' }}
                />
                <CustomInput
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePasswordVisibility}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button fullWidth variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </Stack>
        </CustomStyles>
    )
}

export default Login
