import React from 'react';

import { List, ListItemLink, Typography } from 'components/controls';

const AboutPage = () => (
  <>
    <Typography component="h1" variant="h5">
      My template
    </Typography>
    <List>
      <ListItemLink to="/weather" primary="Weather Forecast" />
      <ListItemLink to="/todo" primary="Todo List" />
      <ListItemLink to="/Expense" primary="My Expense" />
    </List>
  </>
);

export default AboutPage;
