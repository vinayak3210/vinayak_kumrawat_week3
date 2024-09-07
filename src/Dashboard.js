import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Dashboard = ({ activities }) => {
  return (
    <Grid container spacing={3} style={{ marginTop: 20 }}>
      {activities.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center">
          No activities logged yet.
        </Typography>
      ) : (
        activities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Date: {activity.date}</Typography>
                <Typography>Steps: {activity.steps}</Typography>
                <Typography>Calories Burned: {activity.calories}</Typography>
                <Typography>Workout Time: {activity.workoutTime} mins</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Dashboard;
