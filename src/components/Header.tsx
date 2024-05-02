import style from "./Header.module.css"


export function Header(){
    return(
        <div className={style.header}>
            <h1>Lista de Tarefas</h1>
        </div>
    )
}