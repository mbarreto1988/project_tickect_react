import { useState } from 'react'
import Navbar from './components/navbar/Index'
import Events from './components/events/Index'
import './App.css'
import SignupForm from './components/SignupForm'

function App() {
  
  const [searchTerm, setSearchTerm] = useState('')

  const handleNavbarSearch = (term)=>{
    setSearchTerm(term)

  }
  return (
    <>
      {/* <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} /> */}
      <SignupForm/>
    </>
  )
}

export default App


// app
