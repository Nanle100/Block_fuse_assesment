import React, {useState, useEffect} from 'react'

export default function Home() {
    const [data, setData] = useState()
    useEffect(() => {
      const JSData = localStorage.getItem("contact")
      setData(JSON.parse(JSData))
    }, [])
    console.log(data && data[0].name)

    const deleteBtn = (index) => {
        const stData = JSON.parse(localStorage.getItem("contact"));
        const filterdData = stData?.filter((_, id) => id !== index)
        localStorage.setItem("contact", JSON.stringify(filterdData));
        setData(filterdData);
    }
  return (
    <div className=''>
        <div className="">
            <div className="flex max-w-96  mx-auto">
                <h2 className="flex-1 text-xl font-bold">Name</h2>
                <h2 className="flex-1 text-xl font-bold">Phone no.</h2>
                <h2 className=" text-xl font-bold">Action</h2>
            </div>
            {data && data?.map((ob, id ) => {
                return (<div className="flex max-w-96 justify-between mx-auto" key={id}>
                    <p className="flex-1">{ob.name}</p>
                    <p className="flex-1">{ob.number}</p>
                    <button onClick={() => deleteBtn(id)}>delete</button>
                </div>)
            })}
        </div>
    </div>
  )
}
