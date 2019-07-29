import {createStore} from 'redux';

// action type
const ADD_FAVORITE = 'ADD_FAVORITE'

// actions
export const addFavorite = (fav) => ({
    type: ADD_FAVORITE,
    payload: fav
})

// state
const initialState = {
    favorites : []
}

// reducer
function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_FAVORITE: {
            return {...state, favorites: [...state.favorites, action.payload]}
        }
        default:
            return state;
    }
}

export default createStore(reducer);