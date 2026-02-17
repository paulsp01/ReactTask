import React, { useState } from 'react'
import Card from './Components/Card.jsx'

const App = () => {
  let localData=JSON.parse(localStorage.getItem("all-users"));
const [title, setTitle] = useState('')
const [img, setImg] = useState('')
const [role, setRole] = useState('')
const [desc, setDesc] = useState('')
const [allUsers, setAllUsers] = useState(localData || []);

  function handleSubmit(e){
    e.preventDefault();
    console.log(title,img,role,desc)
    let oldUsers = [...allUsers];
    oldUsers.push({title, img, role, desc});
    setAllUsers(oldUsers);
    
    setTitle('')
    setImg('')
    setRole('')
    setDesc('')

    localStorage.setItem("all-users", JSON.stringify(oldUsers));
  }

  function handleRemove(e,idx){
    e.preventDefault();
    const oldUsers = [...allUsers];
    let confm=confirm("Are you sure you want to remove this user?");
    if(confm){
    oldUsers.splice(idx,1);
    }else{
      return;
    }
   
    setAllUsers(oldUsers);
     localStorage.setItem("all-users", JSON.stringify(oldUsers));

  }
  return (
    <div className='flex-col items-center justify-center bg-black h-screen'>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input 
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[45%] text-white border-gray-500'  
        type="text" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        placeholder='Enter your name' />
        <input 
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[45%] text-white border-gray-500' 
        type="text" 
        value={img}
        onChange={(e)=>{
          setImg(e.target.value)
        }}
        placeholder='Enter your Imageurl' />
        <input 
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[45%] text-white border-gray-500' 
        type="text" 
        value={role}
        onChange={(e)=>{
          setRole(e.target.value)
        }}
        placeholder='Enter your role' />
         <input
         
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[45%]  text-white border-gray-500'
          type="text"
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
          placeholder='Enter Description' />
        <button 
        
        className='w-[95%] p-4 bg-blue-600 text-white text-2xl m-5 cursor-pointer'  
        type='submit'>Submit</button>
      </form>

     <div className="flex flex-wrap min-w-screen items-center ">
  {allUsers.map((user, idx) => (
    <Card
      key={idx}
      title={user.title}
      img={user.img}
      role={user.role}
      desc={user.desc}
      onclick={(e) => handleRemove(e, idx)}
    />
  ))}
</div>
    </div>
  )
}

export default App