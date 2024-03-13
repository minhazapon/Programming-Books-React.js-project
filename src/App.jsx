

import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks'

import Books from './Books'

function App() {

     const [marks, setMarks] = useState([])

     const handleMarks = books => {
       
      const newMarks = [...marks, books]

      setMarks(newMarks)
    
    }
 
 

  return (
    <>
     
    
      


      
      <h1 className=' text-center mt-10 font-bold text-4xl text-blue-500'>Apon Books </h1>
       <hr className=' mt-10'></hr>

       <div className=' flex justify-center gap-96 '>

       <Books handleMarks={handleMarks} ></Books>
       <Bookmarks marks={marks}  ></Bookmarks>

       </div>

      



    </>
  )
}

export default App
