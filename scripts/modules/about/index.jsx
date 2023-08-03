import React from 'react';
import { Helmet } from 'react-helmet';

import {
  List,
  ListItemLink,
  ListSubheader,
  ModuleTitle,
  ModuleWrapper
} from 'components/controls';

const AboutPage = () => (
  <>
    <Helmet>
      <title>About | TEMPLATE 20</title>
    </Helmet>
    <ModuleWrapper>
      <ModuleTitle name="About" />
      <List subheader={<ListSubheader>Pages</ListSubheader>}>
        <ListItemLink to="/weather" primary="Weather Forecast" />
        <ListItemLink to="/todo" primary="Todo List" />
        <ListItemLink to="/expense" primary="My Expense" />
        <ListItemLink to="/moscow-districts-quiz" primary="Moscow Districts Quiz" />
      </List>
    </ModuleWrapper>
  </>
);

export default AboutPage;
