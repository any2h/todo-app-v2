import { StyledTodoList } from "./styles/StyledTodoList"
import Checkbox from "./Checkbox"

function TodoList({ todosLength, allCompleted, toggleAllCompleted, children }) {
    return (
        <StyledTodoList>
            {todosLength !== 0 && <Checkbox 
                checked={allCompleted}
                onClick={toggleAllCompleted}
            />}
            {/* <input type="checkbox"></input>
            <label></label> */}
            <ul>
                {children}
            </ul>
        </StyledTodoList>
    )
}

export default TodoList