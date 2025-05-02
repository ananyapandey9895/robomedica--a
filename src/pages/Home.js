import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScienceIcon from '@mui/icons-material/Science';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InspirationMessage from '../components/InspirationMessage';

const features = [
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
    title: 'Advanced Medical Care',
    description: 'State-of-the-art facilities and expert healthcare professionals'
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 40 }} />,
    title: 'Robotic Surgery',
    description: 'Cutting-edge robotic surgical systems for precise procedures'
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
    title: 'AI Diagnostics',
    description: 'Advanced AI-powered diagnostic tools for accurate results'
  },
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
    title: 'Digital Health Records',
    description: 'Secure electronic health records for seamless care'
  }
];

const services = [
  {
    title: 'Robotic Surgery',
    description: 'Next-generation surgical precision with advanced robotics',
    link: '/robotic-surgery',
    color: '#0284c7'
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency medical services with rapid response',
    link: '/emergency',
    color: '#db2777'
  },
  {
    title: 'Telemedicine',
    description: 'Virtual consultations with expert healthcare professionals',
    link: '/telemedicine',
    color: '#22c55e'
  }
];

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: theme.palette.background.gradient,
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: 6,
          borderRadius: { xs: '0 0 24px 24px', md: '0 0 48px 48px' },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(to right, #ffffff, rgba(255,255,255,0.8))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Welcome to RoboMedica
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mb: 4,
                    opacity: 0.9,
                  }}
                >
                  The Future of Healthcare is Here
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/appointment')}
                    sx={{
                      backgroundColor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/robotic-surgery')}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.9)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Explore Services
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src="https://placehold.co/800x600/0284c7/FFFFFF/png?text=Digital+Hospital"
                  alt="Digital Hospital"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                    transform: 'perspective(1000px) rotateY(-5deg)',
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Inspiration Message */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <InspirationMessage />
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Choose RoboMedica
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionCard
                  variants={itemVariants}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box sx={{
                    mb: 2,
                    color: 'primary.main',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {feature.description}
                  </Typography>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6 }}
            >
              Our Services
            </Typography>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <MotionCard
                    variants={itemVariants}
                    onClick={() => navigate(service.link)}
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        backgroundColor: service.color,
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="240"
                      image={`https://placehold.co/600x400/${service.color.replace('#', '')}/${theme.palette.mode === 'dark' ? '1e293b' : 'FFFFFF'}/png?text=${service.title.replace(/\s+/g, '+')}`}
                      alt={service.title}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {service.description}
                      </Typography>
                      <Button
                        endIcon={<ArrowForwardIcon />}
                        sx={{ color: service.color }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;