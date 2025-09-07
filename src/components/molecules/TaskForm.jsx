import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function TaskForm({value}){
    return(
        <form>
            <Input id="nombretarea" name="nombretarea" value={value} />
            <Button type="submit" id="botonañadir">ADD</Button>
        </form>
    )
}