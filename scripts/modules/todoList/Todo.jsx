import React from 'react';
import * as PropTypes from 'prop-types';

import { Button } from 'components/controls';

const Todo = ({ todo, index, completeTodo, removeTodo }) => (
  <div
    className="todo"
    style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
  >
    {todo.text}

    <div>
      <Button onClick={() => completeTodo(index)}>
        {todo.isCompleted ? 'Не выполнено' : 'Выполнено'}
      </Button>
      <Button className="del" onClick={() => removeTodo(index)}>
        Удалить
      </Button>
    </div>
  </div>
);

Todo.propTypes = {
  index: PropTypes.number,
  todo: PropTypes.object,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func
};

export default Todo;
