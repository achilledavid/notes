import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkToNoteStyleSaved = styled(Link)`
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.main};
    cursor: pointer;
    text-decoration: none;
    text-overflow: ellipsis;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    position: relative;

    .lock {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.5rem;
    }

    &:hover {
        filter : brightness(0.9);
    }

    p {
        max-width: 90%;
        margin-left: 5px;
        opacity: 0.7;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 0.5rem
    }

    &.selected {
        background-color: ${(props) => props.theme.color};
        color: ${(props) => props.theme.main};

        p {
            color: ${(props) => props.theme.main};
        }
    }
`;

export const LinkToAddStyle = styled(Link)`
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.main};
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    cursor:default;

    &.pin {
        padding: 5px 0;
    }

    span {
        font-size: 0.5rem;
        display: flex;
        align-items: center;
        gap: 5px;
        border-bottom: 1px solid ${(props) => props.theme.color};
        padding-bottom: 5px;

        p {
            font-size: 0.65rem;
        }
    }
`;