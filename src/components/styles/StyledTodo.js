import styled from "styled-components";

export const StyledTodo = styled.li`
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.taskColor};
    border-radius: 15px;
    height: 60px;
    margin-block: .75rem;
    padding-inline: 1rem;

    form > input {
        margin-left: 2rem;
    }

    > div {
        margin-left: auto;
    }

    button {
        background: transparent;
        border: 0;
        height: 18px;
        transition: all .15s ease-in-out;
        
        > svg {
            fill: #fff;
            transition: all .15s ease-in-out;

            &:hover {
                fill: ${({theme}) => theme.hover};
            }
        }
    }

    ${({theme}) => theme.breakpoints.medium} {
        button {
            opacity: 0;
        }

        &:hover button {
            opacity: 1;
        }
    }

    /* > div {
        margin-left: auto;
    } */
`
