import { useState } from "react";
import Button from "./components/Button";

import {
  FaArrowLeft,
  FaBook,
  FaCalculator,
  FaDivide,
  FaMinus,
  FaTrashCan,
} from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

import { MdHistory } from "react-icons/md";

function App() {
  const [count, setCount] = useState("");

  const insert = (num) => {
    setCount(count + num);
  };
  const handleEqual = () => {
    try {
      setCount(eval(count));
    } catch (e) {
      alert("Massukan input yang benar!");
    }
  };
  const handleBawon = () => {
    try {
      setCount(Math.round(count / 5));
    } catch (e) {
      alert("Massukan input yang benar!");
    }
  };
  return (
    <>
      <div className="box-border bg-gradient-to-tr from-green-400 to-emerald-600 h-screen w-full  p-5 flex items-center justify-center">
        <div className="w-[24rem] p-5 bg-slate-200 rounded-xl">
          <input
            className="w-full p-5 rounded-lg bg-white"
            readOnly
            disabled
            value={count}
          ></input>
          <div className="w-full p-5 bg-slate-300 my-5">
            <div className="flex gap-2 mb-3">
              <Button
                text={<FaTrashCan />}
                onClick={() => setCount("")}
                addStyle={"bg-red-500 text-white"}
              />
              <Button
                text={"X"}
                onClick={() => insert("*")}
                addStyle={"bg-green-500 text-white"}
              />
              <Button
                text={<FaDivide />}
                onClick={() => insert("/")}
                addStyle={"bg-green-500 text-white"}
              />
              <Button
                text={<FaMinus />}
                onClick={() => insert("-")}
                addStyle={"bg-green-500 text-white"}
              />
              <Button
                text={<FaArrowLeft />}
                onClick={() => setCount(count.slice(0, -1))}
                addStyle={"bg-yellow-500 text-white"}
              />
            </div>
            <div className="flex gap-2 mb-3">
              <Button
                text={"6"}
                onClick={() => insert("6")}
                addStyle={"bg-white text-black"}
              />
              <Button
                text={"7"}
                onClick={() => insert("7")}
                addStyle={"bg-white text-black"}
              />
              <Button
                text={"8"}
                onClick={() => insert("8")}
                addStyle={"bg-white text-black"}
              />
              <Button
                text={"9"}
                onClick={() => insert("9")}
                addStyle={"bg-white text-black"}
              />
              <Button
                text={"+"}
                onClick={() => insert("+")}
                addStyle={"bg-green-500 text-white"}
              />
            </div>
            <div className="flex box-border">
              <div className="flex flex-col w-60">
                <div className="flex gap-2 mb-3">
                  <Button
                    text={"2"}
                    onClick={() => insert("2")}
                    addStyle={"bg-white text-black"}
                  />
                  <Button
                    text={"3"}
                    onClick={() => insert("3")}
                    addStyle={"bg-white text-black"}
                  />
                  <Button
                    text={"4"}
                    onClick={() => insert("4")}
                    addStyle={"bg-white text-black"}
                  />
                  <Button
                    text={"5"}
                    onClick={() => insert("5")}
                    addStyle={"bg-white text-black"}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    text={"."}
                    onClick={() => insert(".")}
                    addStyle={"bg-white text-black"}
                  />
                  <Button
                    text={"00"}
                    onClick={() => insert("00")}
                    addStyle={"bg-white text-black"}
                  />
                  <Button
                    text={"0"}
                    onClick={() => insert("0")}
                    addStyle={"bg-white text-black"}
                  />
                  <Button
                    text={"1"}
                    onClick={() => insert("1")}
                    addStyle={"bg-white text-black"}
                  />
                </div>
              </div>
              <div className="w-9 box-content ml-2">
                <Button
                  text={"="}
                  onClick={handleEqual}
                  addStyle={"bg-blue-500 w-[3.7rem] h-full text-white"}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-5">
            <div className="flex gap-3 bg-slate-300 p-3 w-[10rem] rounded-lg">
              <Button
                text={<MdHistory />}
                addStyle={"bg-white text-slate-500 text-2xl"}
              />
              <Button text={<FaBook />} addStyle={"bg-white text-slate-500"} />
            </div>
            <div className="w-full bg-green-300 p-3 box-border rounded-xl">
              <Button
                text={"Bawon"}
                onClick={handleBawon}
                addStyle={"bg-white text-slate-500 w-full text-green-500"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 gap-2">
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
            addStyle={"bg-white text-slate-500 text-5xl"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
