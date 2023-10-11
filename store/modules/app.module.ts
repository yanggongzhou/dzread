import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EDevice, IAppStore } from "@/store/store.interfaces";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { EChannelCode } from "@/typings/home.interface";

export const appSlice = createSlice<IAppStore, SliceCaseReducers<IAppStore>>({
  name: 'app',
  initialState: (): IAppStore => ({
    device: EDevice.wap,
    isShowBrowse: true, // m端语言弹框展开默认关闭分类弹框
    code: EChannelCode.男生,
  }),

  reducers: {
    setChannelCode: (state, action: PayloadAction<EChannelCode>) => {
      state.code = action.payload;
    },

    setDevice: (state, action: PayloadAction<EDevice>) => {
      state.device = action.payload;
    },

    setIsShowBrowse: (state, action: PayloadAction<boolean>) => {
      state.isShowBrowse = action.payload;
    },
  }
});

export const { setDevice, setIsShowBrowse, setChannelCode } = appSlice.actions;

export const appReducer = appSlice.reducer;
