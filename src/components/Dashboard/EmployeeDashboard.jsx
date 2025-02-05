import React from 'react'
import Header from '../Other/Header'
import TaskCount from '../Other/TaskCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-8 bg-[#1c1c1c] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskCount data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard