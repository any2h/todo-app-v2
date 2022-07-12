import { useState, useRef, useEffect } from "react"
import { VscEdit, VscChromeClose } from 'react-icons/vsc'
import { StyledTodo } from './styles/StyledTodo'
import Checkbox from "./Checkbox";
import usePrevious from '../hooks/usePrevious'

function Todo({id, name, completed, toggleTaskCompleted, editTask, deleteTask}) {
    const [newName, setNewName] = useState(name),
        [isEditing, setEditing] = useState(false),
        wasEditing = usePrevious(isEditing),
        inputRef = useRef();

    useEffect(() => {
        // function turnEditingOff(e) {
        //     if (e.target !== inputRef.current) {
        //         setEditing(false)
        //     }
        // }

        // window.addEventListener('click', turnEditingOff)

        if (!wasEditing && isEditing) {
            inputRef.current.focus()
        }

        // return () => {
        //     window.removeEventListener('click', turnEditingOff)
        // }

    }, [wasEditing, isEditing])

    const handleChange = (e) => {
        setNewName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editTask(id, newName)
        setEditing(false)
    }

    return (
        <StyledTodo>
            {isEditing 
                ?
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        ref={inputRef}
                        value={newName}
                        onChange={handleChange} 
                    />
                </form>
                :
                <>
                    <Checkbox 
                        name={name}
                        checked={completed}
                        onClick={toggleTaskCompleted}
                    />

                    <div>
                        <button onClick={() => setEditing(true)}><VscEdit /></button>
                        <button onClick={deleteTask}><VscChromeClose /></button>
                    </div>
                </>
            }
        </StyledTodo>
    )
}

export default Todo