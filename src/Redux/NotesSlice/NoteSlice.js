import {createSlice, current} from '@reduxjs/toolkit'


const initialState = []  




const noteSlice = createSlice({


     name : "notes",
     initialState,
     reducers : {
         addNewNotes (state , action) {
         
        state.push({...action.payload , category : "allNotes" , id : state.length + 1})


         
         },
         deleteNotes (state , action) {
          
            console.log(state,action.payload)
                 
            state = state.splice(action.payload+1, 1)
            console.log("After deletion " , state)
             
         },
         addtoTrash (state , action) {
               
          state.forEach((elem , index) =>{
               if (elem.id == action.payload){
                   elem.category = "Trash"
               }
          })


              

         },
         addToFavourite (state , action) {
           

           state.forEach((elem , index) =>{
               if (elem.id == action.payload){
                  elem.category = "Favourite"
               }
           })

           console.log(state)
           

             console.log(state)

         },
         addtoCustom (state , action) {
          console.log(state);
          console.log(action.payload);

          state.forEach((elem , index) =>{
            if (index == action.payload.index){
               elem.category = action.payload.val
            }
        })
        console.log(state)

         },Restore(state , action) {

           state.forEach((elem , index) =>{
               if (elem.id == action.payload){
                  elem.category = "allNotes"
               }
           })

          

         },Unfav(state , action) {

           state.forEach((elem , index) =>{
               if (elem.id == action.payload){
                  elem.category = "allNotes"
               }
           })


         },Edit(state,action){
            state.forEach((elem , index) =>{
                
                if (index == action.payload.indexToPreview){
                 
                   elem.description = action.payload.editedNote.description

                }

           })
         },
     }
})

export const {addNewNotes , addToFavourite , addtoTrash , addtoCustom,Restore,Unfav,Edit,deleteNotes} = noteSlice.actions
export default noteSlice.reducer