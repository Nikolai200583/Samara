import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
    id: string;   
    url: string;   
    title: string;   
    count: number;
    price: number;
    total: number    
  }

type ItemState = {
  list: Item[];
};

const initialState: ItemState = {
  list: []
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    removeCart: () => initialState,
    addItem(state, action) {
      if(state.list.find((c) => c.id === action.payload.id)){
      return
    }
        state.list.push({
        id: action.payload.id,
        url: action.payload.url,
        title: action.payload.title,     
        count: action.payload.count,
        price: action.payload.price,
        total: action.payload.price       
      });
    },  

    removeItem(state, action: PayloadAction<string>) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addItem, removeItem, removeCart } = itemSlice.actions;

export default itemSlice.reducer;
