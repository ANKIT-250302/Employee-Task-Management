import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="scroll flex flex-col overflow-auto bg-emerald-400 h-full w-[300px] shrink-0 rounded-xl px-3 py-2">
      <div className="flex justify-between ">
        <h3 className="bg-red-700 px-2 rounded-[8px]">High</h3>
        <h4 className="text-[15px] font-semibold">{data.date}</h4>
      </div>
      <h3 className="text-xl font-bold mt-3">{data.title}</h3>
      <p className="text-sm mt-3 ">
      {data.description}
      </p>
      <div className="mt-2">
        <button className="bg-red-500 px-2 rounded w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
