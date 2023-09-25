import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReadStore } from "@/store/store.interfaces";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { EOperateType, EThemeType } from "@/typings/reader.interface";

export const readSlice = createSlice<IReadStore, SliceCaseReducers<IReadStore>>({
  name: 'read',
  initialState: (): IReadStore => ({
    theme: EThemeType.default1,
    fontSize: 18,
    operateType: EOperateType.normal,
  }),

  reducers: {
    setTheme: (state, action: PayloadAction<EThemeType>) => {
      state.theme = action.payload;
    },

    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },

    setOperateType: (state, action: PayloadAction<EOperateType>) => {
      if (state.operateType === action.payload && state.operateType !== EOperateType.normal) {
        state.operateType = EOperateType.normal;
      } else {
        state.operateType = action.payload;
      }
    },
  }
});

export const { setTheme, setFontSize, setOperateType } = readSlice.actions;

export const readReducer = readSlice.reducer;
