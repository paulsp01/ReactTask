import React from 'react'

const Card = (props) => {
  return (
    <div className='w-70 h-80 bg-white border rounded-lg m-10 flex flex-col items-center justify-between p-5'>
        <img className='w-30 h-30 rounded-full object-cover object-center' src={props.img} alt="" />

        <h1 className='text-xl font-bold '>{props.title}</h1>
        <h6>{props.role}</h6>
        <p className='text-sm text-center leading-4'>{props.desc}</p>

    <button onClick={props.onclick} className='px-4 py-1 rounded-lg bg-red-600 text-lg text-white mt-3'>Remove</button>
    </div>
  )
}

export default Card