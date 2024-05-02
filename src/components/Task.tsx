import { FunctionComponent } from "react"
import style from "./Task.module.css"
import { Trash } from "@phosphor-icons/react"

interface Props{
    content: string
    onDeleteTask : FunctionComponent
}


    export function Task({content,onDeleteTask}:Props){

        function handleDeleteTask(){
            onDeleteTask(content)
        }

    return(
        <div className={style.task}>
            <div className={style.taskInside}>
            <input type="checkbox" 
            />
                
                <p>{content}</p>
            </div>
            <div className={style.trashButton}>
                <button onClick={handleDeleteTask}><Trash /></button>
            </div>
            
        </div>
    
    )
}