import styled from 'styled-components';

export const Button = styled.button`
    width: fit-content;
    background-color: ${(props) => props.theme.main};
    outline: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        filter : brightness(0.9);
    }
`;
