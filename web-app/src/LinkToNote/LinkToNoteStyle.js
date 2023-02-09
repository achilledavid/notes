import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkToNoteStyle = styled(Link)`
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

    &:hover {
        filter : brightness(0.9);
    }

    p {
        margin-left: 5px;
        opacity: 0.5;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 0.5rem
    }
`;

export const LinkToAddStyle = styled(Link)`
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.main};
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        filter : brightness(0.9);
    }
`;