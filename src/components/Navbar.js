import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Robotic Surgery', path: '/robotic-surgery' },
  { text: 'Patient Registration', path: '/patient-form' },
  { text: 'Book Appointment', path: '/appointment' },
  { text: 'Medical History', path: '/medical-history' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem
          key={item.text}
          component={RouterLink}
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: location.pathname === item.path ? 
              theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(2, 132, 199, 0.1)' 
              : 'transparent',
            borderRadius: 1,
            my: 0.5,
            mx: 1,
          }}
        >
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              sx: {
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocalHospitalIcon
            sx={{
              display: { xs: 'none', sm: 'flex' },
              mr: 1,
              color: 'primary.main',
            }}
          />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          >
            RoboMedica
          </Typography>
        </Box>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  fontWeight: location.pathname === item.path ? 600 : 500,
                  position: 'relative',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(2, 132, 199, 0.1)',
                  },
                  '&::after': location.pathname === item.path ? {
                    content: '""',
                    position: 'absolute',
                    bottom: -1,
                    left: 8,
                    right: 8,
                    height: '2px',
                    backgroundColor: 'primary.main',
                    borderRadius: '2px',
                  } : {},
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              backgroundColor: 'background.paper',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;