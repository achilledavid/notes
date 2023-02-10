import styled from 'styled-components';

export const NotifStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: ${(props) => props.theme.main};
    border-radius: 5px;
    font-size: 0.8rem;
`;