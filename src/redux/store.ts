import { configureStore } from "@reduxjs/toolkit";
import userPreferencesReducer from "./slices/user-preferences";

export const makeStore = () => {
  return configureStore({
    reducer: {
      userPreferences: userPreferencesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
