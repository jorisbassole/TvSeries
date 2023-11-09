import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { data: [], error: null, favorites: [] },
};

export const tvSeriesSlice = createSlice({
  name: 'tvSeries',
  initialState,
  reducers: {
    fetchTVSeriesSuccess: (state, action) => {
      state.value.data = action.payload;
      state.value.error = null;
    },
    fetchTVSeriesFailure: (state, action) => {
      state.value.data = [];
      state.value.error = action.payload;
    },
    addToFavorites: (state, action) => {
      state.value.favorites.push(action.payload);
    },
    removeToFavorites: (state, action) => {
      state.value.favorites = state.value.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
  },
});

export const { fetchTVSeriesSuccess, fetchTVSeriesFailure, addToFavorites, removeToFavorites } =
  tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
