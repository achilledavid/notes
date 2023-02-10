import styled from 'styled-components';

export const TagsStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 100%;

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .tags_list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
    }

    .tag_head {
        display: flex;
        gap: 10px;
        align-items: center;

        input[type='text'] {
            width: 160px;
            padding: 5px 10px;
            height: 100%;
            border-radius: 5px;
            border: none;
            outline: none;
            background-color: ${({ theme }) => theme.sidebar};
            margin-left: 10px;
        }

        input[type='color'] {
            display: none;
        }

        .button {
            display: flex;
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
        }
    }
`;