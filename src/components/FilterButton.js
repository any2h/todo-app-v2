import styled from "styled-components";

const StyledFilterButton = styled.button`
    border: 0;
    background: transparent;
    font-size: .9375rem;
    color: ${({theme}) => theme.footerColor};
    font-weight: 700;

    &[data-pressed="true"] {
        color: ${({theme}) => theme.taskColor};
    }

    &:hover {
        color: ${({theme}) => theme.hover};
    }
`

export default function FilterButton({ name, onClick, isPressed }) {
    return (
        <StyledFilterButton
            onClick={onClick}
            data-pressed={isPressed}
        >
            {name}
        </StyledFilterButton>
    )
}
