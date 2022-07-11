import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    /* justify-content: space-between; */
    justify-content: space-around;
    align-items: center;

    > * {
        flex: 1;
    }

    > span {
        font-size: .75rem;
        color: ${({theme}) => theme.footerColor};
    }

    > div {
        display: flex;
        gap: 1rem;
        justify-content: center;
        padding-right: 1rem;
        /* padding-left: -1.75rem; */
    }

    > button {
        border: 0;
        background: transparent;
        font-size: .9375rem;
        color: ${({theme}) => theme.footerColor};
        font-weight: 700;
        transition: all .15s ease-in-out;

        &:hover {
            color: ${({theme}) => theme.hover};
        }
    }

    ${({theme}) => theme.breakpoints.small} {
        position: relative;

        > div {
            position: absolute;
            bottom: -80px;
            width: 100%;
            gap: 1.5rem;
            padding: .75rem;
            background-color: ${({theme}) => theme.wrapper};
            border-radius: 20px;
        }
    }
`
