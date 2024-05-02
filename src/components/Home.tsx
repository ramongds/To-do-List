import React, { useState } from "react";
import style from "./Home.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { Task } from "./Task";

interface TaskItem {
  id: number;
  content: string;
  isChecked: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [captureText, setCaptureText] = useState("");

  const isCaptureTextEmpty = captureText.length === 0;
  const isTaskListEmpty = tasks.length === 0;

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();
    const newTask: TaskItem = {
      id: Date.now(),
      content: captureText,
      isChecked: false,
    };
    setTasks([...tasks, newTask]);
    setCaptureText("");
  }

  function handleCaptureNewText(event: React.ChangeEvent<HTMLInputElement>) {
    setCaptureText(event.target.value);
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeleted = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksWithoutDeleted);
  }

  function handleCheckbox(taskId: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  return (
    <div className={style.home}>
      <div className={style.taskAdd}>
        <form onSubmit={handleCreateNewTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            onChange={handleCaptureNewText}
            value={captureText}
          />
          <button type="submit" disabled={isCaptureTextEmpty}>
            Criar <PlusCircle />
          </button>
        </form>
      </div>

      <div className={style.list}>
        <header>
          <h1>
            Tarefas criadas <span>{tasks.length}</span>
          </h1>
          <h2>
            Concluídas{" "}
            <span>
              {tasks.filter((task) => task.isChecked).length} de {tasks.length}
            </span>
          </h2>
        </header>

        <div className={style.taskList}>
          {isTaskListEmpty ? (
            <div className={style.emptyList}>
              <img src="../src/assets/clipboard.svg" alt="Clipboard" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          ) : null}

          {tasks.map((task) => (
            <Task
              key={task.id} // Usando a propriedade id como chave
              task={task}
              onDeleteTask={deleteTask}
              handleCheckbox={handleCheckbox}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
