import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import ActivityForm from './ActivityForm';
import Dashboard from './Dashboard';

function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Fitness Challenge Tracker
        </Typography>
        <ActivityForm addActivity={addActivity} />
        <Dashboard activities={activities} />
      </Box>
    </Container>
  );
}

export default App;
