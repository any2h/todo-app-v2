import { GlobalStyles } from "./components/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { DarkTheme } from "./components/styles/Themes"
import { Wrapper } from "./components/styles/Wrapper"
import { useGlobalContext } from "./Context"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"

export default function App() {
    const { todos } = useGlobalContext()

    return (
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyles />
            <Wrapper>
                <Header />
                <TodoList />
                {todos.length !== 0 &&
                    <Footer />
                }
            </Wrapper>
        </ThemeProvider>
    )
}
