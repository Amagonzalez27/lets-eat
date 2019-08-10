export const GET_CHOICES = 'GET_CHOICES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const CLEAR_CHOICES = 'CLEAR_CHOICES';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const initialState = {
  choices: [], // setChoice
  favorites: [], // setFavorite
};

export function reducer(state, action) {
  switch (action.type) {
    case GET_CHOICES:
      return { ...state, choices: [...action.payload] };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case CLEAR_CHOICES:
      return { ...state, choices: [] };
    case DELETE_FAVORITE:
      const newFavs = state.favorites.filter(el => el.id !== action.payload);
      return { ...state, favorites: [...newFavs] };
    default:
      return state;
  }
}
