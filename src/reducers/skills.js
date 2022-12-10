const initialState = { items: [], loading: false, error: null, search: '' };

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_SKILLS_REQUEST':
      const { search: srch } = action.payload;
      if (srch === '') {
        return { ...state, items: [], loading: false, error: null };
      }
      return { ...state, items: [], loading: true, error: null };
    case 'SEARCH_SKILLS_FAILURE':
      const { error } = action.payload;
      return { ...state, items: [], loading: false, error };
    case 'SEARCH_SKILLS_SUCCESS':
      const { items } = action.payload;
      return { ...state, items, loading: false, error: null };
    case 'CHANGE_SEARCH_FIELD':
      const { search } = action.payload;
      return { ...state, search };
    default:
      return state;
  }
}