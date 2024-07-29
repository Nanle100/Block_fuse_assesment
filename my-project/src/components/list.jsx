import React, { useState } from 'react'

export const List = ({data,  deleteBtn, id}) => {
    const [toggle, setToggle] = useState(false)
    const handleEdit = () =>{
        setToggle(!toggle)
    }
  return (
    <div className="flex justify-between mx-auto py-3 shadow" key={id}>
    {!toggle ? 
        <p className="flex-1 text-center">{data.name}</p>:
        <input className=''/>
    }
    {!toggle? 
    <p className="flex-1 text-center">{data.number}</p>:
        <input type="number" className="" />
    }
        <div className="flex-1 text-center overflow-hidden rounded-full flex justify-center">
            <div className="overflow-hidden rounded-full w-fit">
                <button className='bg-green-800 text-white px-3 py-1' onClick={() => handleEdit(id)}>Edit</button>
                <button className='bg-red-800 text-white px-3 py-1 ' onClick={() => deleteBtn(id)}>delete</button>
            </div>
        </div>
    </div>)
  
}
