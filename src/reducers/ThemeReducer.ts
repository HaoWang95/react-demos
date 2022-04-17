import { createAction, createReducer } from "@reduxjs/toolkit";

export interface ThemeState {
  mode: 'light'| 'dark';
}

export let toggleLight = createAction("theme/light");
export let toggleDark = createAction("theme/dark");

const initThemeState = { mode: "light" } as ThemeState;

let themeReducer = createReducer(initThemeState, (builder) => {
  builder
    .addCase(toggleLight, (state) => {
      state.mode = 'light';
    })
    .addCase(toggleDark, (state) => {
      state.mode = 'dark';
    });
});

export default themeReducer;