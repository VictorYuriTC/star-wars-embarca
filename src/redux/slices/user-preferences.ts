import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBackgroundMusicEnabled: false,
};

const usersPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    toggleIsBackgroundMusicEnabled: (state) => {
      state.isBackgroundMusicEnabled = !state.isBackgroundMusicEnabled;
    },
  },
});

export const { toggleIsBackgroundMusicEnabled } = usersPreferencesSlice.actions;
export default usersPreferencesSlice.reducer;
