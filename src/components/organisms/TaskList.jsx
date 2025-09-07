import TaskItem from "../molecules/TaskItem";

export default function TaskList({tasks}){
    return(
        <div id="columnastareas">
            {tasks.map((task, index)=>(
                <TaskItem
                    key={index}
                    id={`task-${index}`}
                    label={task}
                />
            ))}
        </div>
    )
}