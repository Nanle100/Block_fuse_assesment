import React, {useState} from 'react'

export const Form = () => {
const [name, setName] = useState('');
const [number, setNumber] = useState(0);

    const handleSubmit = () =>{
        const stData = JSON.parse(localStorage.getItem("contact"));
        if(stData){
            
            localStorage.setItem("contact", JSON.stringify([...stData, {name, number}]));
        } else{
            localStorage.setItem("contact",JSON.stringify([{name, number}]))
        }

    }
  return (
    <div className='container mx-auto'> 
        <div className="w-full">

            <div className="">
                <input type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="">
                <input type="number" placeholder='+23490...' value={number} onChange={(e)=> setNumber(e.target.value)}/>
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
