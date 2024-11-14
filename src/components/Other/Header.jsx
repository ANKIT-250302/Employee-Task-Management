import React from 'react'

const Header = (props) => {
  console.log(props)
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl'>Hello <br /><span className='text-3xl'>{props.data.firstname}👋</span></h1>
        <button onClick={logOutUser} className='px-4 py-2 rounded-xl bg-red-600'>Log Out</button>
    </div>
  )
}
export default Header