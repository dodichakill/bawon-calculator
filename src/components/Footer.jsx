import React from "react";
import { FaCalculator } from "react-icons/fa6";
import Button from "./Button";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex max-w-xl m-auto items-center justify-between p-3 gap-2">
      <div className="flex">
        <FaCalculator className="text-5xl text-slate-400" />
        <div className="flex flex-col text-slate-400 font-medium">
          <p>Calculator</p>
          <p>Bawon v2</p>
        </div>
      </div>
      <div className="flex">
        <Button
          text={<FaGithubSquare />}
          onClick={() => {
            window.open("https://github.com/dodichakill/", "_blank");
          }}
          addStyle={"bg-white text-slate-500 text-4xl shadow shadow-green-200"}
        />
      </div>
    </footer>
  );
}

export default Footer;
