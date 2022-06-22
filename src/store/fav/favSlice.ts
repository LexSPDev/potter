import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritesItems : [],
}

const favSlice = createSlice({
    name: "Favs",
    initialState,
    reducers:{
        addToFav(state, action){

            if(state.favoritesItems.length < 5){
                state.favoritesItems.push(action.payload)
            }
        },
        delToFav(state, action){
            const nextFavItems = state.favoritesItems.filter(
                (item: any) => item.name !== action.payload.name
            );
            state.favoritesItems = nextFavItems;
        }
    }
})

export const { addToFav, delToFav}= favSlice.actions;

export default favSlice.reducer;