import React, { useState } from 'react';
import CardBase from '../../components/CardBase'
import './index.scss';
import { v4 as uuidv4 } from 'uuid'

const CreateTodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [items, setItems] = useState([]);

  const handleOnChange = e => {
    setNewTask(e.target.value);
  }

  const handleSumbit = e => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setItems(
        [
          ...items,
          {
            id: uuidv4(),
            task: newTask,
            completed: false
          }
        ])
    }
  }

  return (
    <div className="create-todo-list">
      <CardBase className="create-todo-list-container">
        <h1>Nueva Lista de tareas:</h1>
        <form className="create-todo-list-container-form" onSubmit={handleSumbit}>
          <input className="create-todo-list-container-form-input" value={newTask} onChange={handleOnChange} maxlength="80" />
        </form>
        {items.map((item, id) => <p key={item.id}>{`${id}. ${item.task}`}</p>)}
      </CardBase>
    </div>
  )
}

export default CreateTodoList;
