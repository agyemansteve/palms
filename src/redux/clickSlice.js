import { createSlice } from '@reduxjs/toolkit'

export const clickSlice = createSlice({
    name: 'click',
    initialState: {
      value: false,
    },
    reducers :{
        toggleClick: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = !state.value
          },
          setClick: (state, action)=>{
              state.value=action.payload
          }
        }
    })



    export const {toggleClick, setClick} = clickSlice.actions

    export default clickSlice.reducer