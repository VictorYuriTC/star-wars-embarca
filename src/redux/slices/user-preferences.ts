import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  hasUserStartedTheJourney: false,
  isBackgroundMusicEnabled: false,
};

const usersPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    toggleIsBackgroundMusicEnabled: (state) => {
      state.isBackgroundMusicEnabled = !state.isBackgroundMusicEnabled;
    },

    setIsBackgroundMusicEnabled: (state, action: PayloadAction<boolean>) => {
      state.isBackgroundMusicEnabled = action.payload;
    },

    toggleHasUserStartedTheJourney: (state) => {
      state.hasUserStartedTheJourney = !state.hasUserStartedTheJourney;
    },

    setHasUserStartedTheJourney: (state, action: PayloadAction<boolean>) => {
      state.hasUserStartedTheJourney = action.payload;
    },
  },
});

export const {
  toggleIsBackgroundMusicEnabled,
  setIsBackgroundMusicEnabled,
  toggleHasUserStartedTheJourney,
  setHasUserStartedTheJourney,
} = usersPreferencesSlice.actions;
export default usersPreferencesSlice.reducer;
