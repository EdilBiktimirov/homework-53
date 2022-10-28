import React from "react";

interface TaskProps extends React.PropsWithChildren {
  taskText: string;
  onDeleteClick: React.MouseEventHandler;
  onCheckChange: React.ChangeEventHandler<HTMLInputElement>;
  done: boolean;
}

const Task = (props: TaskProps) => {
  return (
    <div className={props.done? 'doneTask task' : 'task'} id="task">
      <p>{props.taskText}</p>
      <div>
          <input id={'checkbox'} type={'checkbox'} onChange={props.onCheckChange}/>
        <button type={'button'} onClick={props.onDeleteClick}></button>
      </div>
    </div>
  );
};

export default Task;