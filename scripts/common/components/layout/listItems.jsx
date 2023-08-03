import React from 'react';
import { HourglassEmpty, Note } from '@mui/icons-material';

import { List, ListItemLink, ListSubheader } from 'components/controls';
import { BeachAccessIcon, FormatListNumberedIcon } from 'components/icons';

export const mainListItems = (
  <List>
    <ListItemLink to="/weather" primary="Weather" icon={<BeachAccessIcon />} />
    <ListItemLink
      to="/todo"
      primary="Todo List"
      icon={<FormatListNumberedIcon />}
    />
    <ListItemLink
      to="/expense"
      primary="My Expense"
      icon={<HourglassEmpty />}
    />
  </List>
);

export const secondaryListItems = (
  <List>
    <ListSubheader inset>Additional</ListSubheader>
    <ListItemLink to="/123" primary="Ideas" icon={<Note />} />
  </List>
);
