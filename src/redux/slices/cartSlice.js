import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload)
        },

        addQtyItem: (state, action) => {
            const itemCart = state.data.find(
                (item) => item.id === action.payload.id
            )

            console.log(action.payload.id)


            if (itemCart) {
                itemCart.quantity ++
            }
        },

        removeQtyItem: (state, action) => {
            const itemCart = state.data.find(
                (item) => item.id === action.payload.id
            )

            if (itemCart && itemCart.quantity > 0) {
                itemCart.quantity --
            }

            if (itemCart && itemCart.quantity === 0) {
                state.data = state.data.filter((item) => item.id !== action.payload.id)
            }


        },

        deleteFromCart: (state, action) => {
            console.log(action.payload)

            let newState = state.data
            
            if(action.payload === undefined){//delete all
                newState = []
            }else{//delete item
                newState = state.data.filter((item) => item.id !== action.payload.id) 
            }

            state.data = newState
        }
    }
})

export const { addToCart, addQtyItem, removeQtyItem, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer