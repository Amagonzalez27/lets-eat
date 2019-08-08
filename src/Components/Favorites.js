import React, { useContext } from 'react';
import { A } from 'hookrouter';
// import {initialState, reducer} from '../reducer'
import { DispatchContext, StateContext } from '../App';
// Style
import styled from 'styled-components';

function Favorites() {
  // const [state, getFavorites] = useReducer(reducer, initialState)
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const deleteFavorite = id => {
    dispatch({ type: 'DELETE_FAVORITE', payload: id });
  };
  console.log('hello favs', state);
  return (
    <Fav>
      <h1>My Favorites</h1>
      {state.favorites.length > 0 ? (
        <Table>
          <table>
            <thead>
              <tr>
                <th>Remove</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Address</th>
                <th>Price</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {state.favorites.map(fav => (
                <tr key={fav.id}>
                  <td onClick={() => deleteFavorite(fav.id)}>
                    <Delete>X</Delete>
                  </td>
                  <td>
                    <img
                      src={fav.image_url}
                      alt={fav.name}
                      width="100px"
                      height="auto"
                    />
                  </td>
                  <td>{fav.name}</td>
                  <td>{fav.categories[0].title}</td>
                  <td>{`${fav.location.address1}, ${fav.location.city} ${
                    fav.location.zip_code
                  }`}</td>
                  <td>{fav.price}</td>
                  <td>{fav.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>
      ) : (
        <Message>
          Head back to <A href="/">Lets Eat</A> to currate your favorites
        </Message>
      )}
    </Fav>
  );
}

const Fav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Message = styled.p`
  font-style: italic;
  color: palevioletred;

  a {
    color: palevioletred;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    color: #fff;
    font-weight: normal;
    font-weight: bold;
  }
`;
const Table = styled.div`
  border: 1px, solid, white;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;

  tr {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
    min-height: 200px;

    th {
      width: 75%;
    }
    td {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    td:p:nth-of-type(2) {
      flex: 2;
    }

    img {
      border-raidus: 5px;
    }
  }
`;

const Delete = styled.span`
  font-size: 100px;
  font-weight: bold;
  color: palevioletred;
`;

export default Favorites;
