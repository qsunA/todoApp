import React from 'react';
import Header from './component/Header';
import MainSection from './component/MainSection';
import TodoProvider from './store/TodoProvider.component';
import styled, {createGlobalStyle} from 'styled-components';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Div>
        <TodoProvider>
          <Header/>
          <MainSection/>
        </TodoProvider>
      </Div>
    </div>
    
  );
}

const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #111111;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }

  button{
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :focus {
    outline:0;
  }
`;

const Div = styled.div`
  background-color : #fff;
  margin : 130px 0 40px 0;
  position : relative; 
  box-shadow : 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

export default App;
