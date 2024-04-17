import {createSlice} from '@reduxjs/toolkit'


const initialState = []
const categorySlice = createSlice({
     name : "categorySlice",
     initialState,
     reducers : {
        
         addNewCategory (state , action) {0
            console.log(action.payload)
            state.push(action.payload)
        
         },

         deletecategory (state , action) {
            
            let ind = -1

            state.forEach((elem , index) =>{
                 if (elem == action.payload){
                     ind = index;
                 }
            })
            state.splice(ind , 1)
             console.log(state)

         }

     }
})

export const {addNewCategory , deletecategory} = categorySlice.actions
export default categorySlice.reducer