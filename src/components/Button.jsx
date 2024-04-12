import React from "react";

function Button({ text, onClick, addStyle }) {
  return (
    <button
      className={
        "w-16 h-14 rounded-[1rem] text-slate-500 flex justify-center items-center text-center active:scale-90 transition-all text-xl " +
        addStyle
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
