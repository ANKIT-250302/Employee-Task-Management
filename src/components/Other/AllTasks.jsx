import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData,setUserData] = useContext(AuthContext);
  return (
    <div className="scroll flex flex-col  mt-10 bg-[#1c1c1c] h-44 px-10 py-5 ml-6 mr-6 rounded ">
      <div>
        <div className="bg-purple-400 flex mb-2 px-5 justify-between text-lg rounded">
          <h2 className="w-1/5">Employee</h2>
          <h5 className="w-1/5">New Task</h5>
          <h5 className="w-1/5">Active Task</h5>
          <h5 className="w-1/5">Completed</h5>
          <h5 className="w-1/5">Failed</h5>
        </div>
      </div>
      <div className="overflow-auto">
        {userData.map((elem,idx) => {
          return (
            <div key={idx} className="bg-sky-400 flex mb-2 px-5 justify-between text-lg rounded">
              <h2 className="w-1/5">{elem.firstname}</h2>
              <h5 className="w-1/5">{elem.task_count.new_task}</h5>
              <h5 className="w-1/5">{elem.task_count.active}</h5>
              <h5 className="w-1/5">{elem.task_count.completed}</h5>
              <h5 className="w-1/5">{elem.task_count.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
