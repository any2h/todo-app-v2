import { useState } from "react"
import { useGlobalContext } from "../Context"
import { StyledHeader } from "./styles/StyledHeader"

function Header() {
    const [taskName, setTaskName] = useState('')
    const { addTask } = useGlobalContext()

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
                    placeholder="what needs to be done?"
                    onChange={handleChange}
                >

                </input>
            </form>
        </StyledHeader>
    )
}

export default Header
