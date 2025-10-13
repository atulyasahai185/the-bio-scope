import { createSlice } from "@reduxjs/toolkit";

const language = createSlice({
  name: "lang",
  initialState: {
    type: "en",
  },
  reducers: {
    langType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { langType } = language.actions;

export default language.reducer;
