import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Sale {
  weekEnding: string
  retailSales: number
  wholesaleSales: number
  unitsSold: number
  retailerMargin: number
}

interface Product {
  id: string
  title: string,
  image: string,
  subtitle: string,
  sales: Sale[]
}

interface ProductState {
  currentProduct: Product | null
}

const initialState: ProductState = {
  currentProduct: null
}

// Async thunk to simulate fetching from an API with the provided json
export const fetchProductData = createAsyncThunk("product/fetchData", async () => {
  const response = await fetch("data.json");
  const json = await response.json();
  return json;

})

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.currentProduct = action.payload;
    });
  }
});


export default productSlice.reducer;


