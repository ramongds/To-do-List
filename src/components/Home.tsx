import { useState } from "react";
import style from "./Home.module.css"
import { PlusCircle } from "@phosphor-icons/react";
import { Task } from "./Task";
   
export function Home(){

    const [tasks, setTasks] = useState([])
    const [captureText , setCaptureText] = useState("") 
    

    function handleCreateNewTask(){
        event?.preventDefault()

        setTasks([...tasks, captureText])
        setCaptureText("")
        
    }

    function handleCaptureNewText(){
        setCaptureText(event.target.value)

    }



    return(
        <div className={style.home}>

            <div className={style.taskAdd}>

                <form onSubmit={handleCreateNewTask}>
                    <input 
                    placeholder ="Adicione uma nova tarefa" 
                    onChange={handleCaptureNewText}
                    value={captureText}
                    />

                    <button type="submit" >Criar <PlusCircle /> </button>
                </form>

            </div>


            <div className={style.list}>
                <header>
                    <h1>Tarefas criadas <span> {tasks.length}</span></h1>
                    <h2>Concluídas <span> 0 de {tasks.length}</span></h2>
                </header>

                <div className={style.taskList}>
                    {/* <div className={style.emptyList}>
                        <img src="../src/assets/clipboard.svg" />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div> 
                     */}
                    {tasks.map(task =>{
                        return <Task 
                        key={task}
                        content={task}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}