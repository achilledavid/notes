import styled from 'styled-components';

export const NoteListStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 100%;

    .sidebar__container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        flex-wrap: wrap;

        h1 {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .buttons {
            display: flex;
            gap: 5px;
            align-items: center;
        }
    }

    .choose_tag {
        width: 100%;
    }
`;

export default NoteListStyle;
