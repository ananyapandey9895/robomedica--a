import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function InspirationMessage() {
  return (
    <Paper 
      elevation={0}
      sx={{
        p: 3,
        my: 4,
        background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%)',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'primary.light',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <FavoriteIcon sx={{ color: 'primary.main', fontSize: 32 }} />
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.primary',
            fontStyle: 'italic',
            fontWeight: 500,
            textAlign: 'center',
            flex: 1,
          }}
        >
          "You are in control of your health, take charge of your well-being."
        </Typography>
      </Box>
    </Paper>
  );
}

export default InspirationMessage;
