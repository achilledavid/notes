import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.color};
  }

  body {
    background-color: ${(props) => props.theme.body};
  }
`;

const globalPadding = '20px';

export const Main = styled.main`
  margin-left: 240px;
  padding: ${globalPadding};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Side = styled.aside`
  background-color: ${(props) => props.theme.sidebar};
  width: 240px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding: ${globalPadding};
`;

export const WhiteTheme = {
  sidebar: '#f1f1f1',
  body: '#ffffff',
  main: '#f1f1f1',
  color: '#000000',
};

export const DarkTheme = {
  sidebar: '#1e1e1e',
  body: '#343434',
  main: '#1e1e1e',
  color: '#ffffff',
};