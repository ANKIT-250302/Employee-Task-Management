import React from 'react'

const TaskCount = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className='bg-red-400 rounded-xl w-[45%] py-6 px-9'>
            <h2 className='text-3xl font-semibold'>{data.task_count.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

        <div className='bg-blue-400 rounded-xl w-[45%] py-6 px-9'>
            <h2 className='text-3xl font-semibold'>{data.task_count.new_task}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='bg-green-400 rounded-xl w-[45%] py-6 px-9'>
            <h2 className='text-3xl font-semibold'>{data.task_count.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='bg-yellow-400 rounded-xl w-[45%] py-6 px-9'>
            <h2 className='text-3xl font-semibold'>{data.task_count.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
    </div>
  )
}

export default TaskCount