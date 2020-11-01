import React from 'react';

import { List, ListItemLink, ListSubheader } from 'components/controls';

import { BeachAccessIcon, FormatListNumberedIcon } from 'components/icons';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import NoteIcon from '@material-ui/icons/Note';

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
      icon={<HourglassEmptyIcon />}
    />
  </List>
);

export const secondaryListItems = (
  <List>
    <ListSubheader inset>Additional</ListSubheader>
    <ListItemLink to="/123" primary="Ideas" icon={<NoteIcon />} />
  </List>
);
