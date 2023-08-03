import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid';

import NewItem from './NewItem';
import ToDoList from './ToDoList';
import { get as getOption } from './options';

const TodoPage = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    new Promise((resolve, reject) => {
      try {
        resolve(JSON.parse(localStorage.getItem('items')) || []);
      } catch (err) {
        reject(err);
      }
    })
      .then((response) => response.filter(({ deleted }) => !deleted))
      .then((response) => setItems(response));
  }, []);

  useEffect(() => {
    new Promise((resolve, reject) => {
      try {
        localStorage.setItem('items', JSON.stringify(items));
        resolve();
      } catch (err) {
        reject(err);
      }
    }).then((response) => console.log(response));
  }, [items, items.length]);

  const onItemCreateClick = (value) => {
    Promise.resolve({
      value,
      time: +new Date(),
      complete: false,
      uid: uuid(),
      deleted: false
    }).then((item) => setItems([...items, item]));
  };

  const handleFilter = (value) => setFilter(value);

  const handleChangeItems = (item) => setItems(item.slice());

  return (
    <>
      <NewItem onChange={handleFilter} onEnter={onItemCreateClick} />
      <ToDoList
        filter={getOption('filter', (v) => v === 'true') ? filter : ''}
        items={items}
        onChange={handleChangeItems}
      />
    </>
  );
};

export default TodoPage;
