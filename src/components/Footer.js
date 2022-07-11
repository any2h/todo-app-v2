import { StyledFooter } from "./styles/StyledFooter"

function Footer({ span, tasksCompleted, clearCompleted, children}) {
    return (
        <StyledFooter>
            {span}
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