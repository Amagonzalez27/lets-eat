import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';
/* Route Content */
import { useRoutes, A } from 'hookrouter';
import Routes from './Routes';
/* Styling Content */
import styled from 'styled-components';
import { Main } from './styles';
/* Context Providers */
export const DispatchContext = React.createContext(initialState);
export const StateContext = React.createContext(initialState);

function App() {
  const router = useRoutes(Routes);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
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
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

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

export default App;
