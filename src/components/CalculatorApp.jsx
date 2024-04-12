import React, { useEffect, useState } from "react";

import Button from "./Button";

import {
  FaArrowLeft,
  FaBook,
  FaDivide,
  FaMinus,
  FaTrashCan,
} from "react-icons/fa6";

import { GoLaw } from "react-icons/go";
import { MdHistory } from "react-icons/md";
import Alert from "./Alert";
import Notes from "./Notes";
import History from "./History";
function CalculatorApp() {
  const [count, setCount] = useState("");
  const [isError, setError] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [dataHistory, setDataHistory] = useState("");
  const handleInsert = (num) => {
    setCount(count + num);
  };
  const handleEqual = () => {
    try {
      setCount(eval(count));
    } catch (e) {
      setError(true);
    }
  };
  const handleBawon = () => {
    try {
      const result = Math.round(count / 5);
      const timbangan = count;
      const data = {
        timbangan,
        bawon: result,
      };

      if (dataHistory) {
        console.log(dataHistory);
      } else {
        localStorage.setItem("history-timbangan", JSON.stringify(data));
      }
      setCount(result);
    } catch (e) {
      alert("Terdapat gangguan, coba lagi!");
    }
  };

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    const data = localStorage.getItem("history-timbangan");
    const res = JSON.parse(data);
    setDataHistory(res);
    console.log(dataHistory);
    console.log(res);
  }, [isError]);

  return (
    <>
      {isNoteOpen && <Notes handleCloseNotes={() => setIsNoteOpen(false)} />}
      {isHistoryOpen && (
        <History
          handleCloseNotes={() => setIsHistoryOpen(false)}
          data={dataHistory}
        />
      )}
      {isError && <Alert />}
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
              onClick={() => handleInsert("*")}
              addStyle={"bg-green-500 text-white"}
            />
            <Button
              text={<FaDivide />}
              onClick={() => handleInsert("/")}
              addStyle={"bg-green-500 text-white"}
            />
            <Button
              text={<FaMinus />}
              onClick={() => handleInsert("-")}
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
              text={"."}
              onClick={() => handleInsert(".")}
              addStyle={"bg-white text-black"}
            />

            <Button
              text={"7"}
              onClick={() => handleInsert("7")}
              addStyle={"bg-white text-black"}
            />
            <Button
              text={"8"}
              onClick={() => handleInsert("8")}
              addStyle={"bg-white text-black"}
            />
            <Button
              text={"9"}
              onClick={() => handleInsert("9")}
              addStyle={"bg-white text-black"}
            />
            <Button
              text={"+"}
              onClick={() => handleInsert("+")}
              addStyle={"bg-green-500 text-white"}
            />
          </div>
          <div className="flex box-border">
            <div className="flex flex-col w-60">
              <div className="flex gap-2 mb-3">
                <Button
                  text={"00"}
                  onClick={() => handleInsert("00")}
                  addStyle={"bg-white text-black"}
                />

                <Button
                  text={"4"}
                  onClick={() => handleInsert("4")}
                  addStyle={"bg-white text-black"}
                />
                <Button
                  text={"5"}
                  onClick={() => handleInsert("5")}
                  addStyle={"bg-white text-black"}
                />
                <Button
                  text={"6"}
                  onClick={() => handleInsert("6")}
                  addStyle={"bg-white text-black"}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  text={"0"}
                  onClick={() => handleInsert("0")}
                  addStyle={"bg-white text-black"}
                />

                <Button
                  text={"1"}
                  onClick={() => handleInsert("1")}
                  addStyle={"bg-white text-black"}
                />
                <Button
                  text={"2"}
                  onClick={() => handleInsert("2")}
                  addStyle={"bg-white text-black"}
                />
                <Button
                  text={"3"}
                  onClick={() => handleInsert("3")}
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
              onClick={() => setIsHistoryOpen(true)}
              addStyle={"bg-white text-slate-500 text-2xl"}
            />
            <Button
              text={<FaBook />}
              onClick={() => setIsNoteOpen(true)}
              addStyle={"bg-white text-slate-500"}
            />
          </div>
          <div className="w-full bg-slate-300 p-3 box-border rounded-xl">
            <Button
              text={
                <span className="flex items-center gap-3">
                  <GoLaw /> Bawon
                </span>
              }
              onClick={handleBawon}
              disable={typeof count === "number" ? false : true}
              addStyle={"bg-white text-slate-500 w-full text-green-500"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorApp;
