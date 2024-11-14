import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import Login from '../Auth/Login'
import { AuthContext } from '../../context/AuthProvider'
const TaskList = ({data}) => {
  const x = useContext(AuthContext)
  return (
    <div className='scroll flex overflow-auto gap-5  h-[50%] w-full mt-10  px-3 py-3'>
        {data.tasks.map((elem,idx)=>{
          if(elem.active){
            return <AcceptTask data={elem} key={idx}/>
          }
          if(elem.new_task){
            return <NewTask data={elem} key={idx}/>
          }
          if(elem.completed){
            return <CompleteTask data={elem} key={idx}/>
        
          }
          if(elem.failed){
            return <FailedTask data={elem} key={idx}/>
          }
        })}
    </div>
  )
}

export default TaskList