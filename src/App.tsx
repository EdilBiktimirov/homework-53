import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";


type taskObject = {
  text?: string;
  id?: string;
}

function App() {

  const [tasks, setTasks] = useState([
      {text: 'Do homework-53', id: 'q1'},
      {text: 'Read the lesson description', id: 'q2'},
      {text: 'View webinar', id: 'q3'}
    ]
  );

  const [currentTask, setCurrentTask] = useState({
    text: 'Add new task',
  })

  const addTask = () => {

  }

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const copyCurrentTask = {...currentTask};
    copyCurrentTask.text = event.target.value;

    setCurrentTask(copyCurrentTask);

    console.log(currentTask.text);
    console.log('test');
  };

  const taskList = tasks.map((task, index) => (
    <Task
      key={task.id}
      taskText={task.text}
    >
    </Task>
  ))

  return (
    <div className="App">
      <div className='container'>
        <AddTaskForm userInput={currentTask.text} onTaskChange={(event) => changeInputValue(event)}/>
        {taskList}
      </div>
    </div>
  );
}

export default App;
