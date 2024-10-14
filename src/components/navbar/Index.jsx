import { useState } from "react";

const Navbar = ({ onSearch }) => {

  const [search, setSearch] = useState('')

  const handleInputChange = (event)=>{
    setSearch(event.target.value);    
  }

  const handleInputKeyDown = (evt)=>{
    if(evt.key === 'Enter'){
      onSearch(search)
    }  
  }

  console.log(search);
  

  return (
    <div>
        <p>Mi boletera</p>
        <input 
          placeholder='Busca tu evento favorito' 
          onChange={handleInputChange} 
          onKeyDown={handleInputKeyDown}
          value={search}
        />
    </div>
  )
}

export default Navbar