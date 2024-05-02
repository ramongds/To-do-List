import style from "./Task.module.css"
import { Trash } from "@phosphor-icons/react"

interface Props{
    content: string
}


    export function Task(){
    return(
        <div className={style.task}>
            <div className={style.taskInside}>
            <input type="checkbox" 
            id={""}
            content={""}
            />
                
                <p>Integer urna interdum massa libero auctor neque turpis 
                turpis semper. Duis vel sed fames integer.
                
                 </p>
            </div>
            <div className={style.trashButton}>
                <button><Trash /></button>
            </div>
            
        </div>
    
    )
}