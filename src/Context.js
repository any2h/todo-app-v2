import { createContext, useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid"

const starter = [
    {id: nanoid(), name: 'Тестовое задание', completed: true},
    {id: nanoid(), name: 'Прекрасный код', completed: false},
    {id: nanoid(), name: 'Покрытие тестами', completed: false},
]

const filterNames = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed,
}

const AppContext = createContext()

export const ContextProvider = ({children}) => {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || starter)
    const [filter, setFilter] = useState('All')
    const allCompleted = todos.every(todo => todo.completed)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTask = (name) => {
        if (name) {
            setTodos(prevTodos => [...prevTodos, {id: nanoid(), name, completed: false}])
        }
    }

    const toggleTaskCompleted = (id) => {
        setTodos(prevTodos => prevTodos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
    }

    const editTask = (id, newName) => {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? {...todo, name: newName} : todo
        ))
    }

    const deleteTask = (id) => {
        setTodos(prevTodos =>
            prevTodos.filter(todo => todo.id !== id)
        )
    }

    const clearCompleted = () => {
        setTodos(prevTodos => prevTodos.filter(todo => 
            !todo.completed    
        ))
    }

    const toggleAllCompleted = () => {
        allCompleted
            ? setTodos(prevTodos => prevTodos.map(todo => 
                ({...todo, completed: todo.completed = false})
            ))
            : setTodos(prevTodos => prevTodos.map(todo => 
                ({...todo, completed: todo.completed = true}) 
            ))
    }

    return (
        <AppContext.Provider 
            value={{
                todos,
                addTask,
                toggleTaskCompleted,
                editTask,
                deleteTask,
                clearCompleted,
                toggleAllCompleted,
                allCompleted,
                filterNames,
                filter,
                setFilter,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
