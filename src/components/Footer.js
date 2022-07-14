import { StyledFooter } from "./styles/StyledFooter"

function Footer({ todos, clearCompleted, children}) {
    const tasksCompleted = todos.filter(todo => todo.completed).length,
        activeTasksLeft = todos.filter(todo => !todo.completed).length,
        spanElement = <span>{activeTasksLeft} {activeTasksLeft === 1 ? 'task' : 'tasks'} left</span>;

    return (
        <StyledFooter>
            {spanElement}
            <div>
                {children}
            </div> 
            <button
                style={{opacity: tasksCompleted && '1'}}
                onClick={clearCompleted}
            >
                Clear completed
            </button>
        </StyledFooter>
    )
}

export default Footer