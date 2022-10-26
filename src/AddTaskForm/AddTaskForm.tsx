import React from "react";

interface FormProps extends React.PropsWithChildren {
  userInput: string;
  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm = (props: FormProps) => {

  return (
    <div className="formBox">
  <form className="mainForm">
    <input type={"text"} value={props.userInput} onChange={props.onTaskChange}/>
    <button type={"button"}>Add</button>
  </form>
    </div>
  );
}

export default AddTaskForm;
