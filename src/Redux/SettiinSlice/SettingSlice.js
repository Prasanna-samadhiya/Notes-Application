import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     canEdit : false,
     canAutoSave : false,
     autoSave : 400,
     sortby : ""
}
const settingSlice = createSlice({
          
      name : "settingSlice",
      initialState,
      reducers : {
        
          editDelay (state , action) {

              console.log(action.payload)
              console.log(state)
              
              state.autoSave = action.payload
              
              console.log(state)
            }

      } 
 
    

} )

export const {editDelay} = settingSlice.actions
export default settingSlice.reducer