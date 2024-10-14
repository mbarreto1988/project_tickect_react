import { useState } from "react"

const SignupForm = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')

    const handleClearClik = ()=>{
        setName('')
        setAge('')
        setAddress('')
        setZipcode('')
        setPhone('')
        console.log('Clear');
    }

    const handleSubmitForm = (evt)=>{
        evt.preventDefault()
        console.log('submit',{
            name,
            age,
            address,
            zipcode,
            phone
        });
        
    }

  return (
    <form onSubmit={handleSubmitForm}>
        <label> 
            name
            <input value={name} onChange={(evt)=> setName(evt.target.value)} />
        </label>
        <br />
        <label> 
            Age
            <input value={age} onChange={(evt)=> setAge(evt.target.value)} />
        </label>
        <br />
        <label> 
            Address
            <input value={address} onChange={(evt)=> setAddress(evt.target.value)} />
        </label>
        <br />
        <label> 
            Zipcode
            <input value={zipcode} onChange={(evt)=> setZipcode(evt.target.value)} />
        </label>
        <br />
        <label> 
            Phone
            <input value={phone} onChange={(evt)=> setPhone(evt.target.value)} />
        </label>
        <br />
        <div>
            <button type="button" onClick={handleClearClik}>clear</button>
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default SignupForm