import style from "./Task.module.css"
import { Trash } from "@phosphor-icons/react"

interface Props{
    content: string
}


    export function Task({content}:Props){
    return(
        <div className={style.task}>
            <div className={style.taskInside}>
            <input type="checkbox" 
            />
                
                <p>{content}</p>
            </div>
            <div className={style.trashButton}>
                <button><Trash /></button>
            </div>
            
        </div>
    
    )
}