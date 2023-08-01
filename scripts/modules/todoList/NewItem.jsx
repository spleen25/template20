import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

const ref = createRef();

const NewItem = ({ onEnter = () => {}, onChange = () => {} }) => {
  const [todo, setTodo] = useState('');

  const handleAddItem = () => {
    onEnter(todo);
    setTodo('');
    onChange('');
    ref.current.focus();
  };

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      handleAddItem();
    }
  };

  const handleChange = ({ target: { value } }) => {
    setTodo(value);
    onChange(value);
  };

  return (
    <TextField
      fullWidth
      label="Add an item"
      ref={ref}
      value={todo}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              title="Click to add"
              disabled={!todo.trim()}
              onClick={handleAddItem}
            >
              <AddCircle />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

NewItem.propTypes = {
  onEnter: PropTypes.func,
  onChange: PropTypes.func
};

export default NewItem;
