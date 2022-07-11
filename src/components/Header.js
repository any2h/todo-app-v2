import { useState } from "react"
import { StyledHeader } from "./styles/StyledHeader"

function Header({ addTask }) {
    const [taskName, setTaskName] = useState('')

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskName)
        setTaskName('')
    }

    return (
        <StyledHeader>
            <h1>T O D O</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={taskName}
                    onChange={handleChange}
                >

                </input>
            </form>
        </StyledHeader>
    )
}

export default Header