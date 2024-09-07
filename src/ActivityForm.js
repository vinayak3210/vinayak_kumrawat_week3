import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const ActivityForm = ({ addActivity }) => {
  const [activity, setActivity] = useState({
    date: '',
    steps: '',
    calories: '',
    workoutTime: '',
  });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.date && activity.steps && activity.calories && activity.workoutTime) {
      addActivity(activity);
      setActivity({ date: '', steps: '', calories: '', workoutTime: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date"
            name="date"
            type="date"
            value={activity.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Steps"
            name="steps"
            value={activity.steps}
            onChange={handleChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Calories"
            name="calories"
            value={activity.calories}
            onChange={handleChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Workout Time (mins)"
            name="workoutTime"
            value={activity.workoutTime}
            onChange={handleChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log Activity
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ActivityForm;
