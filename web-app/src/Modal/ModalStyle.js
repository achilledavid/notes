import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal__container {
        background-color: #fff;
        width: 320px;
        height: fit-content;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        text-align:center;

        h1 {
            font-size: 1rem;
            color: ${(props) => props.theme.contrast};
        }

        .buttons {
            display: flex;
            flex-direction: row;
            gap: 20px;
            justify-content: center;
        }
    }
`;