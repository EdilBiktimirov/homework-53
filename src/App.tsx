import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./components/Task/Task";

function App() {
  const [tasks, setTasks] = useState([
      {text: 'Do homework-53', id: 'q1', done: false},
      {text: 'Read the lesson description', id: 'q2', done: false},
      {text: 'View webinar', id: 'q3', done: false}
    ]);

  const [currentTask, setCurrentTask] = useState({
    text: 'Add new task',
    id: '',
    done: false
  });

  const addTask = () => {
    const copyCurrentTask = {...currentTask};

    if (copyCurrentTask.text !== '' && copyCurrentTask.text !== 'Add new task') {
      const randomInt = Math.floor(Math.random() * 10000000000);
      copyCurrentTask.id = randomInt.toString()
      const copyTasks = [...tasks]
      copyTasks.push(copyCurrentTask);
      setTasks(copyTasks);
    }
  };

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const copyCurrentTask = {...currentTask};
    copyCurrentTask.text = event.target.value;

    setCurrentTask(copyCurrentTask);
  };

  const deleteTask = (id: string) => {
    const copyTasks = [...tasks];

    copyTasks.forEach(elem => {
      if (elem.id === id) {
        copyTasks.splice(copyTasks.indexOf(elem), 1);
        setTasks(copyTasks);
      }
    });
  };

  const check = (value: boolean, id: string) => {
    const copyTasks = [...tasks];

    copyTasks.forEach(elem => {
      if (elem.id === id) {
        if (value) {
          elem.done = false;
          setTasks(copyTasks);
        } else {
          elem.done = true;
          setTasks(copyTasks);
        }
      }
    });
  };

  const taskList = tasks.map((task) => (
    <Task
      key={task.id}
      taskText={task.text}
      onDeleteClick={() => deleteTask(task.id)}
      done={task.done}
      onCheckChange={() => check(task.done, task.id)}
    >
    </Task>
  ));

  return (
    <div className="App">
      <div className='container'>
        <AddTaskForm
          userInput={currentTask.text}
          onTaskChange={(event) => changeInputValue(event)}
          onBtnClick={addTask}/>
        {taskList}
      </div>
    </div>
  );
}

export default App;
