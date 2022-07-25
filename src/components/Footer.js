import { useGlobalContext } from "../Context"
import { StyledFooter } from "./styles/StyledFooter"
import FilterButton from "./FilterButton"

function Footer() {
    const { todos, filterNames, filter, setFilter, clearCompleted } = useGlobalContext(),
        tasksCompleted = todos.filter(todo => todo.completed).length,
        activeTasksLeft = todos.filter(todo => !todo.completed).length,
        spanElement = <span>{activeTasksLeft} {activeTasksLeft === 1 ? 'task' : 'tasks'} left</span>;

    return (
        <StyledFooter>
            {spanElement}
            <div>
                {Object.keys(filterNames).map(name => 
                    <FilterButton
                        key={name}
                        name={name}
                        isPressed={name === filter}
                        onClick={() => setFilter(name)}
                    />
                )}
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
