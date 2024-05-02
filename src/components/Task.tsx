import style from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

interface Props {
  task: {
    id: number;
    content: string;
    isChecked: boolean;
  };
  onDeleteTask: (taskId: number) => void;
  handleCheckbox: (taskId: number) => void;
}

export function Task({ task, onDeleteTask, handleCheckbox }: Props) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCheckboxChange() {
    handleCheckbox(task.id);
  }

  return (
    <div className={style.task}>
      <div className={style.taskInside}>
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={handleCheckboxChange}
        />
        <p>{task.content}</p>
      </div>
      <div className={style.trashButton}>
        <button onClick={handleDeleteTask}>
          <Trash />
        </button>
      </div>
    </div>
  );
}
