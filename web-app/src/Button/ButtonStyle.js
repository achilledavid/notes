import styled from 'styled-components';

export const Button = styled.button`
    width: fit-content;
    background-color: ${(props) => props.theme.main};
    outline: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    
    &.icon {
        height: 100%;
        aspect-ratio: 1/1;

        &.small {
            padding: 8px;

            span {
                font-size: 0.65rem;
            }
        }
    }

    &:hover {
        filter : brightness(0.9);
    }

    span {
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;
