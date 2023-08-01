import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField
} from '@mui/material';
import { Cancel, Delete } from '@mui/icons-material';

import { get as getOption } from './options';

export default function ToDoList({
  filter = '',
  items = [],
  onChange = () => {}
}) {
  // Handle item changed property
  const handleChange = (item) => {
    const index = items.findIndex((i) => i.uid === item.uid);
    items[index] = item;
    onChange(items);
  };

  const optShowDeleted = getOption('showDeleted', (v) => v === 'true');
  const optFilter = getOption('filter', (v) => v === 'true');

  // Apply filter on active items if filter option is active
  const lowerCaseFilter = filter.toLowerCase();
  const filterItems = items.filter(
    ({ value, deleted }) =>
      (!optFilter || !filter || value.includes(lowerCaseFilter)) &&
      (optShowDeleted || !deleted)
  );

  return (
    <List>
      {filterItems
        .filter(({ complete }) => !complete)
        .map(({ uid, ...props }) => (
          <ToDoItem
            key={uid}
            item={{ uid, ...props }}
            onChange={handleChange}
          />
        ))}
      {filterItems
        .filter(({ complete }) => complete)
        .map(({ uid, ...props }) => (
          <ToDoItem
            key={uid}
            item={{ uid, ...props }}
            onChange={handleChange}
          />
        ))}
    </List>
  );
}

const useStyle = makeStyles({
  Hidden: {
    visibility: 'hidden'
  },
  Visible: {
    visibility: 'visible'
  }
});

function ToDoItem({ onChange, item }) {
  const { complete, deleted, value } = item;

  const [edit, setEdit] = useState(false);
  const classes = useStyle();

  const handleToggle = (e) => {
    onChange({ ...item, complete: !complete });
  };

  const handleChange = ({ target: { newValue } }) => {
    onChange({ ...item, newValue });
  };

  const handleDelete = () => {
    onChange({ ...item, deleted: true });
  };

  const handleUndo = () => {
    onChange({ ...item, deleted: false });
  };

  // TODO: add title if item is deleted
  return (
    <ListItem button onClick={() => setEdit(true)}>
      <ListItemIcon>
        <Checkbox
          title="Click to toggle"
          checked={complete}
          onClick={handleToggle}
        />
      </ListItemIcon>

      {edit ? (
        <TextField
          autoFocus
          fullWidth
          value={value}
          onBlur={() => setEdit(false)}
          onChange={handleChange}
        />
      ) : (
        <ListItemText primary={value} />
      )}

      {
        // TODO: If deleted:
        // action delete forever
        // action restore
      }
      {deleted ? (
        <ListItemSecondaryAction>
          <Delete />
        </ListItemSecondaryAction>
      ) : (
        <ListItemSecondaryAction
          className={edit ? classes.Visible : classes.Hidden}
        >
          <IconButton onMouseDown={handleDelete} title="Click to delete">
            <Cancel />
          </IconButton>
          <IconButton onMouseDown={handleUndo} title="Click undo">
            <Cancel />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}
