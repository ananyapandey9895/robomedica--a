import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Button,
  CardMedia,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import PrecisionIcon from '@mui/icons-material/PrecisionManufacturing';
import AccuracyIcon from '@mui/icons-material/Grade';
import RecoveryIcon from '@mui/icons-material/Healing';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const benefits = [
  {
    icon: <PrecisionIcon sx={{ fontSize: 40 }} />,
    title: 'Enhanced Precision',
    description: 'Robotic systems provide surgeons with superior visualization and precise control.'
  },
  {
    icon: <AccuracyIcon sx={{ fontSize: 40 }} />,
    title: '3D Visualization',
    description: 'High-definition 3D imaging allows for better surgical navigation and accuracy.'
  },
  {
    icon: <RecoveryIcon sx={{ fontSize: 40 }} />,
    title: 'Faster Recovery',
    description: 'Minimally invasive approach leads to quicker healing and shorter hospital stays.'
  }
];

const surgeryTypes = [
  {
    title: 'Robotic Cardiac Surgery',
    description: 'Precise heart procedures with minimal invasion',
    color: '#0284c7'
  },
  {
    title: 'Robotic Orthopedic Surgery',
    description: 'Joint replacement and spine procedures',
    color: '#db2777'
  },
  {
    title: 'Robotic General Surgery',
    description: 'Advanced procedures for various conditions',
    color: '#22c55e'
  }
];

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function RoboticSurgery() {
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
    <PageLayout title="Advanced Robotic Surgery">
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" gutterBottom>
                Next-Generation Surgical Care
              </Typography>
              <Typography variant="body1" paragraph>
                Our state-of-the-art robotic surgery system represents the pinnacle of surgical innovation,
                offering unprecedented precision and control for better patient outcomes.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/appointment')}
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 2 }}
              >
                Schedule Consultation
              </Button>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Card elevation={0} sx={{ overflow: 'hidden', borderRadius: 4 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://placehold.co/800x400/0284c7/FFFFFF/png?text=Robotic+Surgery+System"
                  alt="Robotic Surgery System"
                  sx={{
                    objectFit: 'cover',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </Card>
            </MotionBox>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 6 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography variant="h3" gutterBottom>
            Benefits of Robotic Surgery
          </Typography>
          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionCard
                  variants={itemVariants} 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box sx={{ 
                    mb: 2,
                    color: 'primary.main',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Box>

      <Box>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography variant="h3" gutterBottom>
            Our Surgical Specialties
          </Typography>
          <Grid container spacing={3}>
            {surgeryTypes.map((surgery, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionCard
                  variants={itemVariants}
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      backgroundColor: surgery.color,
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="200"
                    image={`https://placehold.co/600x400/${surgery.color.replace('#', '')}/${theme.palette.mode === 'dark' ? '1e293b' : 'FFFFFF'}/png?text=${surgery.title.replace(/\s+/g, '+')}`}
                    alt={surgery.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {surgery.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {surgery.description}
                    </Typography>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{ color: surgery.color }}
                      onClick={() => navigate('/appointment')}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Box>
    </PageLayout>
  );
}

export default RoboticSurgery;
