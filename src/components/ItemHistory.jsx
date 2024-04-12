import React from "react";
import { BsFillAwardFill } from "react-icons/bs";
import { GoLaw } from "react-icons/go";

function ItemHistory({ timbangan, bawon }) {
  return (
    <div className="w-full flex items-center justify-between my-3 bg-slate-200 text-slate-500 p-3 rounded-md">
      <div className="flex items-center gap-2">
        <GoLaw /> : <span>{timbangan}</span>
      </div>

      <div className="flex items-center gap-2">
        <BsFillAwardFill /> : <span>{bawon}</span>
      </div>
    </div>
  );
}

export default ItemHistory;
