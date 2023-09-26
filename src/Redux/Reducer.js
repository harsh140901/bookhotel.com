import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'location',
  initialState: {
    destination: "",
    date: "",
    stayType: "",
    isSignedIn: false
  },
  reducers: {
    updateDestination: (state, action) => {
      state.destination = action.payload 
    },
    updateDate: (state, action) => {
        state.date = action.payload 
      },
    updateIsSignedIn: (state, action)=>{
      state.isSignedIn = action.payload
    },
    updateStayType: (state, action)=>{
      state.stayType = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateDestination, updateDate , updateIsSignedIn ,updateStayType} = counterSlice.actions

export default counterSlice.reducer