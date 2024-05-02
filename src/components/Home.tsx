import { useState } from "react";
import style from "./Home.module.css"
import { PlusCircle } from "@phosphor-icons/react";
import { Task } from "./Task";

   
export function Home(){
    const [taskContent, setTaskContent] = useState("")
    const [tasks, setTasks] = useState([])


    return(
        <div className={style.home}>
            <div className={style.taskAdd}>
                <form >
                    <input placeholder ="Adicione uma nova tarefa"  />
                    <button type="submit" >Criar <PlusCircle /> </button>
                </form>
            </div>


            <div className={style.list}>
                <header>
                    <h1>Tarefas criadas <span> 0</span></h1>
                    <h2>Concluídas <span> 0 de 0</span></h2>
                </header>

                <div className={style.taskList}>
                    <div className={style.emptyList}>
                        <img src="../src/assets/clipboard.svg" />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div> 
                    <Task/>

                </div>
            </div>
        </div>
    )
}