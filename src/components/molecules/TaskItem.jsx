import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

export default function TaskItem({id, label}){
    return(
        <div className="tareas">
            <div className="tareastexto">
                <Checkbox id={id} label={label} />
            </div>
            <Button type="button" className="botonbasura">
                🗑
            </Button>
        </div>
    )
}