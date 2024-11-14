import React, { useContext  } from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTasks from '../Other/AllTasks' 

const AdminDashboard = (props) => {
  
  return (
    <div className='p-8 h-screen '>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTasks />
    </div>
  )
}

export default AdminDashboard