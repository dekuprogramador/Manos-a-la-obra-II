import TaskForm from "../molecules/TaskForm"
import TaskList from "../organisms/TaskList"

export default function TaskTemplate({tasks, newTask}){
    return(
        <section>
            <article>
                <h2>LISTA DE TAREAS DE SANTIAGO</h2>
                <TaskForm value={newTask}/>
                <TaskList tasks={tasks}/>
            </article>
        </section>
    )
}