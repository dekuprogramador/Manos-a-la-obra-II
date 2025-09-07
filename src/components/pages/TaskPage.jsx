import TaskTemplate from "../templates/TaskTemplate";

export default function TaskPage(){
    const tasks=["TAREA N", "TAREA N-1", "TAREA K"];
    const newTask="";

    return(
        <TaskTemplate
            tasks={tasks}
            newTask={newTask}
        />
    )
}