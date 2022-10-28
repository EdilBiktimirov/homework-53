import React from "react";

interface FormProps extends React.PropsWithChildren {
  userInput: string;
  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
  onBtnClick: React.MouseEventHandler;
}

const AddTaskForm = (props: FormProps) => {
  return (
  <form className="mainForm">
    <div className="formBox">
    <input type={"text"} value={props.userInput} onChange={props.onTaskChange}/>
    <button type={"button"} onClick={props.onBtnClick}>Add</button>
    </div>
  </form>
  );
};

export default AddTaskForm;
