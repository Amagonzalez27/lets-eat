import React from 'react';
import { useRoutes, A } from 'hookrouter';
import styled from 'styled-components';
import { Main } from './styles';
import Routes from './Routes';

const Nav = styled.div`
  background-color: #eee;
  width: 100%;
  height: 75px;
`;

function App() {
  const router = useRoutes(Routes);
  return (
    <Main>
      <Nav>
        <A href="/">Lets Eat</A>
      </Nav>
      {router}
    </Main>
  );
}

export default App;
