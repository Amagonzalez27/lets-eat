export const initialState = {
    choices: [], // setChoice
    favorites: [], // setFavorite
  }
  
export function reducer(state, action) {
    switch (action.type) {
        case 'GET_CHOICES':
            return {...state, choices: [...action.payload] }
        case 'ADD_FAVORITES':
            console.log('Favorites from Reducer', state.favorites)
            return {...state, favorites: [...state.favorites, action.payload]}
        default: 
        return state
    }
}