import { StyledTodoList } from "./styles/StyledTodoList"
import { useGlobalContext } from "../Context"
import Todo from "./Todo"
import Checkbox from "./Checkbox"

function TodoList() {
    const { 
            todos,
            allCompleted,
            toggleTaskCompleted,
            toggleAllCompleted,
            editTask,
            deleteTask,
            filterNames,
            filter 
        } = useGlobalContext()

    return (
        <StyledTodoList>
            {todos.length !== 0 && <Checkbox 
                checked={allCompleted}
                onClick={toggleAllCompleted}
            />}

            <ul>
                {todos.filter(filterNames[filter]).map(todo => 
                    <Todo 
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        completed={todo.completed}
                        toggleTaskCompleted={() => toggleTaskCompleted(todo.id)}
                        editTask={editTask}
                        deleteTask={() => deleteTask(todo.id)}
                    />
                )}
            </ul>
        </StyledTodoList>
    )
}

export default TodoList
