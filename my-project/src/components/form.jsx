import React, {useState} from 'react'
import toast from 'react-hot-toast';

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
        setName("");
        setNumber(0);
        toast.success("New contact created")

    }
  return (
    <form className='container mx-auto px-5 w-96 mt-7'> 

        <h2 className="text-center text-xl font-semibold mt-3">Add To List </h2>
        <div className="w-full mt-3 flex flex-col">
            <div className="mt-5">
                <input type="text" className='w-full p-3 shadow' placeholder='name' value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="mt-5">
                <input type="number" className='w-full p-3 shadow' placeholder='+23490...' value={number} onChange={(e)=> setNumber(e.target.value)}/>
            </div>
            <button type="button" className='mt-5 bg-black text-white rounded-md px-5 py-2 max-sm:w-full' onClick={handleSubmit}>Submit</button>
        </div>
    </form>
  )
}
