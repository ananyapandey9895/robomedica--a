import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PatientForm from './pages/PatientForm';
import AppointmentForm from './pages/AppointmentForm';
import MedicalHistory from './pages/MedicalHistory';
import RoboticSurgery from './pages/RoboticSurgery';
import { color } from 'framer-motion';


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#0284c7' : '#38bdf8',
      light: mode === 'light' ? '#38bdf8' : '#7dd3fc',
      dark: mode === 'light' ? '#0369a1' : '#0284c7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: mode === 'light' ? '#db2777' : '#f472b6',
      light: mode === 'light' ? '#f472b6' : '#f9a8d4',
      dark: mode === 'light' ? '#be185d' : '#db2777',
    },
    background: {
      default: mode === 'light' ? '#f0f9ff' : '#0f172a',
      paper: mode === 'light' ? '#ffffff' : '#1e293b',
      gradient: mode === 'light' 
        ? 'linear-gradient(120deg, #0284c7 0%, #38bdf8 100%)'
        : 'linear-gradient(120deg, #1e293b 0%, #334155 100%)',
    },
    text: {
      primary: mode === 'light' ? '#0f172a' : '#ffffff',
      secondary: mode === 'light' ? '#334155' : '#cbd5e1',
    },
    error: {
      main: mode === 'light' ? '#ef4444' : '#f87171',
    },
    success: {
      main: mode === 'light' ? '#22c55e' : '#4ade80',
    },
    warning: {
      main: mode === 'light' ? '#f59e0b' : '#fbbf24',
    },
    info: {
      main: mode === 'light' ? '#3b82f6' : '#60a5fa',
    },
    divider: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: 'white',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'inherit',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: 'inherit',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: 'inherit',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: 'inherit',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.palette.mode === 'light' 
            ? '0 1px 3px rgba(0,0,0,0.1)' 
            : '0 1px 3px rgba(0,0,0,0.3)',
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.palette.mode === 'light'
              ? '0 4px 20px rgba(0,0,0,0.1)'
              : '0 4px 20px rgba(0,0,0,0.4)',
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#ffffff',
            '& input': {
              color: '#000000',
            },
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: '#0284c7',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0284c7',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#000000',
            '&.Mui-focused': {
              color: '#0284c7',
            },
          },
          '& .MuiFormHelperText-root': {
            color: '#475569',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0284c7',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0284c7',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#000000',
          '&.Mui-focused': {
            color: '#0284c7',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',

          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === 'light' 
            ? 'rgba(255, 255, 255, 0.8)'
            : 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(8px)',
        }),
      },
    },
  },
});

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <IconButton
            onClick={toggleColorMode}
            color="inherit"
            sx={{
              position: 'fixed',
              right: 24,
              bottom: 24,
              backgroundColor: 'background.paper',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              zIndex: 1000,
              '&:hover': {
                backgroundColor: 'background.paper',
                transform: 'scale(1.1)',
              },
            }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patient-form" element={<PatientForm />} />
              <Route path="/appointment" element={<AppointmentForm />} />
              <Route path="/medical-history" element={<MedicalHistory />} />
              <Route path="/robotic-surgery" element={<RoboticSurgery />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
