import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex w-full justify-end gap-5 p-3 '>
        <Link  to={"/"}>Home</Link>
        <Link to={"/create"}>Create</Link>
    </div>
  )
}
