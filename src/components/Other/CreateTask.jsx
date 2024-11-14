import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [assignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [NewTasks, setNewTasks] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTasks({
      active: false,
      new_task: true,
      completed: false,
      failed: false,
      title,
      description,
      category,
      date,
    });
    const data = userData;
    data.forEach((elem) => {
      if (assignTo == elem.firstname) {
        elem.tasks.push(NewTasks);
        elem.task_count.new_task=elem.task_count.new_task+1
      }
    });
    
    console.log(data);
    setUserData(data)
    localStorage.setItem('employees',JSON.stringify(userData))
    const employees =JSON.parse(localStorage.getItem('employees'))

    


    setAsignTo("");
    setCategory("");
    setDate("");
    setTaskTitle("");
    setDescription("");
  };
  return (
    <div>
      <div className=" mt-10 bg-[#1c1c1c] px-20 py-5 ml-6 mr-6 rounded ">
        <form onSubmit={handleSubmit} className="flex justify-between ">
          <div className="w-[40%]  flex flex-col gap-7">
            <div>
              <h3>Task Title</h3>
              <input
                value={title}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="w-full bg-transparent border-[1px] rounded px-2"
                type="text"
                placeholder="Enter task"
              />
            </div>
            <div>
              <h3>Date</h3>
              <input
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="w-full bg-transparent border-[1px] rounded px-2"
                type="date"
              />
            </div>
            <div>
              <h3>Assign To</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAsignTo(e.target.value);
                }}
                className="w-full bg-transparent border-[1px] rounded px-2"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h3>Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="w-full bg-transparent border-[1px] rounded px-2"
                type="text"
                placeholder="Design, Dev"
              />
            </div>
          </div>
          <div className="w-[30%] flex flex-col">
            <h3>Description</h3>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              cols="30"
              rows="9"
              className="w-full bg-transparent border-[1px] rounded px-2"
            ></textarea>
            <button className="bg-emerald-400 mt-4 rounded h-8">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
