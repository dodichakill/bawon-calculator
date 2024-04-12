import React from "react";

function Button({ text, onClick, addStyle, disable = false }) {
  return (
    <button
      className={
        "w-16 h-14 rounded-[1rem] text-slate-500 flex justify-center items-center disabled:bg-slate-400 disabled:cursor-not-allowed disabled:text-slate-300 text-center active:scale-90 transition-all text-xl shadow-sm " +
        addStyle
      }
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </button>
  );
}

export default Button;
