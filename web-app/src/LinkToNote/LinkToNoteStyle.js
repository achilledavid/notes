import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkToNoteStyle = styled(Link)`
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.main};
    cursor: pointer;
    text-decoration: none;
    font-size: 0.85rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        filter : brightness(0.9);
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