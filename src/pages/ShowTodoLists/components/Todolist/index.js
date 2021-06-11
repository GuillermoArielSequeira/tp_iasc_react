import React, { useState } from 'react';
import EditItem from '../EditItem';
import { getIcon } from '../../../../icons';
import './index.scss';

const ShowTodoLists = ({ todoList }) => {
  const [todoListEditable, setTodoListEditable] = useState(todoList);

  const markTaskAsCompleted = (id, e) => {
    e.preventDefault();
    const foundTask = todoListEditable.tasks.find(task => task.id === id);
    foundTask.completed = true;
    setTodoListEditable({
      id: todoListEditable.id,
      tasks: [
        ...todoListEditable.tasks,
      ]
    })
  }

  const deleteTask = (id, e) => {
    e.preventDefault();
    const filteredTasks = todoListEditable.tasks.filter(task => task.id !== id);
    setTodoListEditable({
      id: todoListEditable.id,
      tasks: [
        ...filteredTasks
      ]
    })
  }

  const editTask = (id, e, openInput = false) => {
    e.preventDefault();
    const foundTask = todoListEditable.tasks.find(task => task.id === id);
    foundTask.edit = openInput;
    setTodoListEditable({
      id: todoListEditable.id,
      tasks: [
        ...todoListEditable.tasks,
      ]
    })
  }

  const changeDescription = (id, description) => {
    const foundTask = todoListEditable.tasks.find(task => task.id === id);
    foundTask.description = description;
    setTodoListEditable({
      id: todoListEditable.id,
      tasks: [
        ...todoListEditable.tasks,
      ]
    })
  }

  return (
    <>
      {
        todoListEditable.tasks.length ? todoListEditable.tasks.map(task => (
          <div className='todo-item'>
            <div className='todo-item-description'>
              <p key={task.id}>
                {task.id}. {task.description}
              </p>
              {task.edit &&
                <EditItem
                  closeInput={e => editTask(task.id, e)}
                  changeDescription={changeDescription}
                  idTask={task.id}
                  editTask={editTask}
                />}
            </div>
            <div className='todo-item-right-content'>
              {task.completed && <p className="todo-item-right-content-completed">completed!</p>}
              {!task.completed &&
                <a onClick={e => editTask(task.id, e, true)}>
                  {getIcon('edit')}
                </a>
              }
              <a onClick={e => markTaskAsCompleted(task.id, e)}>
                {getIcon('check', 'green')}
              </a>
              <a onClick={e => deleteTask(task.id, e)}>
                {getIcon('delete', 'red')}
              </a>
            </div>
          </div>
        )) : <p>No hay mas tareas para eliminar</p>
      }
    </>
  )
}

export default ShowTodoLists;
