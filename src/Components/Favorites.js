import React, { useContext } from 'react';
// import {initialState, reducer} from '../reducer'
import { StateContext } from '../App';

function Favorites() {
  // const [state, getFavorites] = useReducer(reducer, initialState)
  const state = useContext(StateContext);
  console.log('hello favs', state);
  return (
    <div>
      <h1>My Favorites</h1>
      {state.favorites.length > 0 ? (
        <table>
          <tbody>
            {state.favorites.map(fav => (
              <tr key={fav.id}>
                <p>{fav.name}</p>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>'Head back to Lets Eat to currate your favorites'</h2>
      )}
    </div>
  );
}

export default Favorites;
