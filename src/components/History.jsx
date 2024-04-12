import React, { useEffect } from "react";
import { CgNotes } from "react-icons/cg";
import { IoCloseCircleSharp } from "react-icons/io5";
import ItemHistory from "./ItemHistory";

function History({ handleCloseNotes, data }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="absolute m-5 w-full h-screen bg-[#4841418f] flex justify-center items-center">
      <div className="w-full max-w-96 p-5 bg-white min-h-96 rounded-lg overflow-y-auto">
        <div className="w-full border-b-2 pb-2 flex items-center justify-between">
          <h1 className="text-2xl flex gap-3 items-center">
            <CgNotes />
            History
          </h1>

          <IoCloseCircleSharp
            className="text-3xl cursor-pointer"
            color="red"
            onClick={handleCloseNotes}
          />
        </div>
        <ItemHistory timbangan={data?.timbangan} bawon={data?.bawon} />
      </div>
    </div>
  );
}

export default History;
