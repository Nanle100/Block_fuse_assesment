import React, { useState } from 'react'

export default function button({handleUpdate}) {
    const [toggle, setToggle] = useState()
  return (
    <>
        <button></button>
        <div className="">
            <button className='' onClick={() => deleteBtn(id)}>edit</button>
            <button className='' onClick={() => deleteBtn(id)}>delete</button>
        </div>
    </>
  )
}
