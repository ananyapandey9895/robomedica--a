import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Sample medical history data
const initialMedicalHistory = [
  {
    id: 1,
    date: '2023-01-15',
    condition: 'Hypertension',
    treatment: 'Lisinopril 10mg daily',
    doctor: 'Dr. Sarah Johnson',
    notes: 'Blood pressure under control with medication',
  },
  {
    id: 2,
    date: '2023-03-22',
    condition: 'Type 2 Diabetes',
    treatment: 'Metformin 500mg twice daily',
    doctor: 'Dr. Michael Chen',
    notes: 'Blood sugar levels improving with diet and medication',
  },
];

function MedicalHistory() {
  const [medicalHistory, setMedicalHistory] = useState(initialMedicalHistory);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHistory = medicalHistory.filter((record) =>
    Object.values(record).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Medical History
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Medical History"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => {
                // Add new medical record functionality
                console.log('Add new medical record');
              }}
            >
              Add New Record
            </Button>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Treatment</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredHistory.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.condition}</TableCell>
                  <TableCell>{record.treatment}</TableCell>
                  <TableCell>{record.doctor}</TableCell>
                  <TableCell>{record.notes}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        // Edit record functionality
                        console.log('Edit record:', record.id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => {
                        // Delete record functionality
                        console.log('Delete record:', record.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Allergies
          </Typography>
          <Paper sx={{ p: 2 }}>
            <Typography>No known allergies</Typography>
          </Paper>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Medications
          </Typography>
          <Paper sx={{ p: 2 }}>
            <Typography>Current medications:</Typography>
            <ul>
              <li>Lisinopril 10mg - Daily</li>
              <li>Metformin 500mg - Twice daily</li>
            </ul>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default MedicalHistory; 