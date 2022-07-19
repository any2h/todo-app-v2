import { motion, AnimatePresence } from "framer-motion"
import { StyledTodoList } from "./styles/StyledTodoList"
import Todo from "./Todo"
import Checkbox from "./Checkbox"

function TodoList({ todos, todosLength, allCompleted, toggleAllCompleted, deleteTask, toggleTaskCompleted, editTask }) {

    return (
        <StyledTodoList>
            {todosLength !== 0 && <Checkbox 
                checked={allCompleted}
                onClick={toggleAllCompleted}
            />}
            {/* <input type="checkbox"></input>
            <label></label> */}
            <ul>
                <AnimatePresence initial={false}>
                    {todos.map(todo=>
                        <motion.div
                            key={todo.id}
                            
                            initial={{ scale: .1 }}
                            animate={{ scale: 1, transition: {duration: .3} }}
                            exit={{ opacity: 0, x: -250 }}
                            layout
                        >
                            <Todo 
                                key={todo.id}
                                id={todo.id}
                                // positionTransition
                                name={todo.name}
                                completed={todo.completed}
                                toggleTaskCompleted={() => toggleTaskCompleted(todo.id)}
                                editTask={editTask}
                                deleteTask={() => deleteTask(todo.id)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </ul>
        </StyledTodoList>
    )
}

export default TodoList