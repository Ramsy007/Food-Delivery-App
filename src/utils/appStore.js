import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({
      reducer:{
        cart:cartReducer,
      },
}

);
export default appStore;
// actually for each slice there is a reducer so we import it like 
/**
 *  reducer:{
 *    card:cartreducer}
 * 
 */