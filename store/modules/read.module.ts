import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReadStore } from "@/store/store.interfaces";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { EnumFontSize, EThemeType } from "@/typings/reader.interface";

export const readSlice = createSlice<IReadStore, SliceCaseReducers<IReadStore>>({
  name: 'read',
  initialState: (): IReadStore => ({
    theme: EThemeType.default1,
    fontSize: EnumFontSize.normal,
  }),

  reducers: {
    setTheme: (state, action: PayloadAction<EThemeType>) => {
      state.theme = action.payload;
    },

    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  }
});

export const { setDevice } = readSlice.actions;

export const readReducer = readSlice.reducer;
