import styled from "styled-components";

const Input = styled.input`
    appearance: none;
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked+label {
        text-decoration: line-through;
        color: #7D80AA;
    }

    &:checked+label::before {
        outline: 0;
        background-color: ${({theme}) => theme.wrapper};
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    &:not(:disabled):not(:checked)+label:hover::before {
        outline: 1px solid ${({theme}) => theme.hover};
    } 
`

const Label = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    user-select: none;

    &::before {
        content: '';
        width: 1.25rem;
        height: 1.25rem;
        outline: 1px solid #4F74FF;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: 70%;
        background-position: center;
        transition: all .15s ease-in-out;
    }
`

export default function Checkbox({ checked, onClick, name }) {

    return (
        <>
            <Input 
                type="checkbox"
                checked={checked}
                onChange={onClick}
            />

            <Label 
                onClick={onClick}
                children={name}
            />
        </>
    )
}
