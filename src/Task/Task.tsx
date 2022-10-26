import React from "react";

interface TaskProps extends React.PropsWithChildren {
  taskText: string;
}

const Task = (props: TaskProps) => {
  return (
    <div className="task">
      <p>{props.taskText}</p>
      <button type={'button'}>Delete</button>
    </div>
  );
}

export default Task