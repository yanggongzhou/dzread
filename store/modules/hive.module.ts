import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHiveStore } from "@/store/store.interfaces";
import ClientConfig from "@/client.config";
import { isIos } from "@/utils/tools";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { IClipboard } from "@/typings/hive.interfaces";
import { netIpUa } from "@/server/clientLog";
import { getUserLandId } from "@/utils/storage/localstorages";

export const clipboardAsync = createAsyncThunk<IClipboard>(
  'hive/getClipboard',
  async () => {
    const ua = navigator.userAgent;
    const channelCode = isIos(ua) ? ClientConfig.ios.channelCode : ClientConfig.android.channelCode;
    const clipboard = {
      ip: "0.0.0.0",
      h5uid: getUserLandId(),
      channelCode,
      h5fingerPrint: "",
      ua,
      url: window.location.href,
    };
    const ip = await netIpUa({
      ...clipboard,
      bid: ClientConfig.bookId,
      cid: 0,
      shareCode: 0
    })

    return {
      ...clipboard,
      ip
    } as IClipboard;
  }
)

export const hiveSlice = createSlice<IHiveStore, SliceCaseReducers<IHiveStore>>({
  name: 'hive',
  initialState: () => {
    return {
      clipboard: {
        ip: "0.0.0.0",
        h5uid: "",
        bid: '',
        channelCode: '',
        cid: 0,
        shareCode: 0,
        url: process.env.WebDomain ?? '',
        ua: '',
        h5fingerPrint: "",
      },
    }
  },
  reducers: {
    setClipboard: (state, action: PayloadAction<{ bid?: string; cid?: string | number;}>) => {
      if (!!action.payload.bid) {
        state.clipboard.bid = action.payload.bid
      }
      if (!!action.payload.cid) {
        state.clipboard.cid = action.payload.cid
      }
    }
  },
  // 在extraReducers中可以对请求结果的成功失败，做不同的处理
  extraReducers: (builder) => {
    builder
      .addCase(clipboardAsync.fulfilled, (state, action) => {
        // const clipboardObj = Object.assign(state.clipboard, action.payload);
        state.clipboard = { ...state.clipboard, ...action.payload };
      })
    ;
  }
});

export const { setClipboard } = hiveSlice.actions;


// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//     (dispatch, getState) => {
//       const currentValue = selectCount(getState())
//       if (currentValue % 2 === 1) {
//         dispatch(incrementByAmount(amount))
//       }
//     }
//
export const hiveReducer = hiveSlice.reducer;
