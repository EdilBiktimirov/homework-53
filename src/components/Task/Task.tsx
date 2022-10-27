import React from "react";

interface TaskProps extends React.PropsWithChildren {

  taskText: string;
  onDeleteClick: React.MouseEventHandler;
}

const Task = (props: TaskProps) => {
  return (
    <div className="task">
      <p>{props.taskText}</p>
      <button type={'button'} onClick={props.onDeleteClick}>Delete</button>
    </div>
  );
}

export default Task