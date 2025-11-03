// import { useState } from 'react'//rafce

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


import React from 'react'
import './component/Book.css'
import Book from './component/Book'
import Header from './component/header'
import Footer from './component/footer'

const App = () => {
  return (
    <div>
      <Header/>
    <div className='app' >

      
    
      <Book/>
      <Book/>
      <Book/>
    
    </div>
    <Footer/>
    </div>
  )
}

export default App

