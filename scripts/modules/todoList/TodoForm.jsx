import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Введите задачу"
      />
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func
};

export default TodoForm;
