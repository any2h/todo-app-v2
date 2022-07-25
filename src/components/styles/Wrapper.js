import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.wrapper};
    border-radius: 20px;
`
