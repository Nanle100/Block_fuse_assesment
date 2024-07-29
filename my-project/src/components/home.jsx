import React, {useState, useEffect} from 'react'
import { List } from './list';

export default function Home() {
    const [data, setData] = useState();
    const [toggle, setToggle] = useState(false);

    
    useEffect(() => {
      const JSData = localStorage.getItem("contact")
      setData(JSON.parse(JSData))
    }, [])


    const deleteBtn = (index) => {
        const stData = JSON.parse(localStorage.getItem("contact"));
        const filterdData = stData?.filter((_, id) => id !== index)
        localStorage.setItem("contact", JSON.stringify(filterdData));
        setData(filterdData);
    }

  

  return (
    <div className=''>
        <div className="max-w-[700px] mx-auto shadow-md">
            <div className="flex   ">
                <h2 className="flex-1 text-xl font-bold text-center">Name</h2>
                <h2 className="flex-1 text-xl font-bold text-center">Phone no.</h2>
                <h2 className="flex-1 text-xl font-bold text-center">Action</h2>
            </div>
            {data && data?.map((ob, id ) =>  <List data={ob} key={id} deleteBtn={deleteBtn}  id={id}/>)}
        </div>
    </div>
  )
}
