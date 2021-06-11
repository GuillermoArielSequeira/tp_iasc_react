import React, { useState } from 'react';
import { getIcon } from '../../../../icons';
import './index.scss';

const EditItem = ({ idTask, closeInput, changeDescription, editTask }) => {

  const [newTask, setNewTask] = useState('');

  const handleOnChange = e => {
    setNewTask(e.target.value);
  }

  return (
    <div className="edit-item">
      <input className="create-todo-list-container-form-input" maxLength="80" value={newTask} onChange={handleOnChange} />
      <>
        <a onClick={
          e => {
            changeDescription(idTask, newTask)
            editTask(idTask, e)
          }}>
          {getIcon('check', 'green')}
        </a>
        <a onClick={closeInput}>
          {getIcon('close', 'red')}
        </a>
      </>
    </div>
  );
};

export default EditItem;
