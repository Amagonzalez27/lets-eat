import React from 'react';
import { useRoutes, A } from 'hookrouter';
import styled from 'styled-components';
import { Main } from './styles';
import Routes from './Routes';

const Navbar = styled.nav`
  height: 50px;
  width: 100%;
  margin: 0;
  background-color: #e3e3e3;
  box-shadow: 0 5px 10px grey;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;

  li {
    padding: 10px;

    a {
      color: #282c34;
      text-decoration: none;
    }
  }
`;

function App() {
  const router = useRoutes(Routes);
  return (
    <Main>
      <Navbar>
        <NavList>
          <li>
            <A href="/">Lets Eat</A>
          </li>
          <li>
            <A href="/favorites">My Favorites</A>
          </li>
        </NavList>
      </Navbar>
      {router}
    </Main>
  );
}

export default App;
