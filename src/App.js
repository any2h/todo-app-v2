import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { GlobalStyles } from "./components/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { DarkTheme } from "./components/styles/Themes"
import { Wrapper } from "./components/styles/Wrapper"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import Todo from "./components/Todo"
import Footer from "./components/Footer"
import FilterButton from "./components/FilterButton"

const filterNames = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed,
}

export default function App() {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []),
        [filter, setFilter] = useState('All'),
        allCompleted = todos.every(todo => todo.completed);

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
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyles />
            <Wrapper>
                <Header
                    addTask={addTask}
                />

                <TodoList
                    todosLength={todos.length}
                    allCompleted={allCompleted}
                    toggleAllCompleted={toggleAllCompleted}
                    children={todos.filter(filterNames[filter]).map(todo => 
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
                />

                {todos.length !== 0 &&
                    <Footer
                        todos={todos}
                        clearCompleted={clearCompleted}
                        children={Object.keys(filterNames).map(name => 
                            <FilterButton
                                key={name}
                                name={name}
                                isPressed={name === filter}
                                onClick={() => setFilter(name)}
                            />
                        )}
                    />
                }
            </Wrapper>
        </ThemeProvider>
    )
}
