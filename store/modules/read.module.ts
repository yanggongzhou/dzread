import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReadStore } from "@/store/store.interfaces";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { EThemeType } from "@/typings/reader.interface";

export const readSlice = createSlice<IReadStore, SliceCaseReducers<IReadStore>>({
  name: 'read',
  initialState: (): IReadStore => ({
    theme: EThemeType.default1,
    fontSize: 18,
  }),

  reducers: {
    setTheme: (state, action: PayloadAction<EThemeType>) => {
      state.theme = action.payload;
    },

    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
  }
});

export const { setTheme, setFontSize } = readSlice.actions;

export const readReducer = readSlice.reducer;
