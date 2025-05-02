import React from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import PageLayout from '../components/PageLayout';

const departments = [
  'General Medicine',
  'Robotic Surgery',
  'Cardiology',
  'Orthopedics',
  'Neurology',
  'Pediatrics',
];

function AppointmentForm() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    navigate('/');
  };

  return (
    <PageLayout title="Book Appointment">
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 3, bgcolor: 'white' }}>
        <Card sx={{ p: 4, bgcolor: 'white' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  sx={{ mb: 2, color: 'black' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  sx={{ mb: 2, color: 'black' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  sx={{ mb: 2, color: 'black' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  sx={{ mb: 2, color: 'black' }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel style={{ color: 'black' }}>Department</InputLabel>
                  <Select
                    label="Department"
                    defaultValue=""
                    sx={{ color: 'black' }}
                  >
                    {departments.map((dept) => (
                      <MenuItem key={dept} value={dept.toLowerCase()} style={{ color: 'black' }}>
                        {dept}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Preferred Date"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        required 
                        fullWidth
                        sx={{ mb: 2, color: 'black' }}
                      />
                    )}
                    disablePast
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Preferred Time"
                    value={selectedTime}
                    onChange={(newValue) => setSelectedTime(newValue)}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        required 
                        fullWidth
                        sx={{ mb: 2, color: 'black' }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Notes"
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Please provide any additional information about your condition"
                  sx={{ mb: 2, color: 'black' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/')}
                    sx={{ color: 'black' }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ color: 'white' }}
                  >
                    Book Appointment
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Box>
    </PageLayout>
  );
}

export default AppointmentForm;