import React, { useState } from 'react';

import { ModuleTitle, ModuleWrapper } from 'components/controls';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoListPage = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Забрать письмо о назначении руководителя практики',
      isCompleted: true
    },
    {
      text: 'Подписать дневник практики',
      isCompleted: true
    },
    {
      text: 'Подготовить отчет по практике',
      isCompleted: true
    },
    {
      text: 'Защитить практику',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <ModuleWrapper>
      <ModuleTitle name="Todo List" />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </ModuleWrapper>
  );
};

export default TodoListPage;
