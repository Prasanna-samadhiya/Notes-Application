import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/NavSidebar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import AllNotes from './Pages/AllNotes'
import Favourites from './Pages/Favourites'
import Trash from './Pages/Trash'
import AddNotes from './Pages/AddNotes'
import NavSidebar from './Components/NavSidebar'
import Preview from './Components/Preview'
import Categories from './Pages/Categories'
import BottomBar from './Components/settings/BottomBar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Router>
         <div className='flex'>
         <Sidebar/>
         <div className='flex flex-col' style={{margin:"50px 100px 100px 100px"}}>
          <Routes>
 
            <Route  path='/' element= {<Home />}/>
            <Route  path='/allnotes' element= {<AllNotes />}/>
            <Route  path='/favourites' element= {<Favourites/>}/>
            <Route  path='/trash' element= {<Trash />}/>
            <Route  path='/addnotes' element= {<AddNotes />}/>
            <Route  path='/category/:cat' element={<Categories/>}/>

          </Routes>
          
          </div>
         </div>
        
        </Router>
        
      </>
  )
}

export default App
