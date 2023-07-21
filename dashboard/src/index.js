import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

import App from './App'
import theme from './configs/mui'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Router>
                <App />
            </Router>
        </CssVarsProvider>
    </StrictMode>,
)
