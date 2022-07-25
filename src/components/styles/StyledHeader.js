import styled from 'styled-components'

export const StyledHeader = styled.header`
    text-align: center;

    h1 {
        margin-block: 1rem;
    }

    input {
        width: 100%;
        border-radius: 15px;
        border: 0;
        height: 50px;
        text-indent: 3.125rem;
        color: ${({theme}) => theme.taskColor};
        margin-bottom: 1rem;
        
        &::placeholder {
            font-style: italic;
            opacity: .4;
        }
    }
`
