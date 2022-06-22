import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritesItems : [],
    totalFavorites: 0
}

const favSlice = createSlice({
    name: "Favs",
    initialState,
    reducers:{
        addToFav(state, action){
            const index = state.favoritesItems.findIndex((item) => item.name === action.payload.name)
            console.log(index)
            if(state.favoritesItems.length < 5 && index <= 0){
                state.favoritesItems.push(action.payload)
                state.totalFavorites
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