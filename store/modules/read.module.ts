import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReadStore } from "@/store/store.interfaces";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { EOperateType, EThemeType } from "@/typings/reader.interface";
import { setReadSetting } from "@/utils/cookies";

export const readSlice = createSlice<IReadStore, SliceCaseReducers<IReadStore>>({
  name: 'read',
  initialState: (): IReadStore => {
    return {
      theme: EThemeType.default1,
      fontSize: 18,
      operateType: EOperateType.normal, // pc侧边栏选中状态
      catalogVisible: false, // wap 目录
      controlVisible: false, // wap 操作
    }
  },

  reducers: {
    setTheme: (state, action: PayloadAction<EThemeType>) => {
      state.theme = action.payload;
      setReadSetting(encodeURIComponent(JSON.stringify({ theme: action.payload, fontSize: state.fontSize })))
    },

    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
      setReadSetting(encodeURIComponent(JSON.stringify({ theme: state.theme, fontSize: action.payload })))
    },

    setOperateType: (state, action: PayloadAction<EOperateType>) => {
      if (state.operateType === action.payload && state.operateType !== EOperateType.normal) {
        state.operateType = EOperateType.normal;
      } else {
        state.operateType = action.payload;
      }
    },
    setCatalogVisible: (state, action: PayloadAction<boolean>) => {
      state.catalogVisible = action.payload;
    },
    setControlVisible: (state, action: PayloadAction<boolean>) => {
      state.controlVisible = action.payload;
    },
  }
});

export const { setTheme, setFontSize, setOperateType, setCatalogVisible, setControlVisible } = readSlice.actions;

export const readReducer = readSlice.reducer;
