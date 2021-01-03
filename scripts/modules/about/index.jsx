import React from 'react';

import { useTitle } from 'hooks';

import {
  List,
  ListItemLink,
  ListSubheader,
  ModuleTitle,
  ModuleWrapper
} from 'components/controls';

const AboutPage = () => {
  useTitle('About');
  return (
    <ModuleWrapper>
      <ModuleTitle name="About" />
      <List subheader={<ListSubheader>Pages</ListSubheader>}>
        <ListItemLink to="/weather" primary="Weather Forecast" />
        <ListItemLink to="/todo" primary="Todo List" />
        <ListItemLink to="/expense" primary="My Expense" />
      </List>
    </ModuleWrapper>
  );
};

export default AboutPage;
