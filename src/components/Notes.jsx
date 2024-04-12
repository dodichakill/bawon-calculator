import React from "react";
import { CgNotes } from "react-icons/cg";
import { IoCloseCircleSharp, IoSave } from "react-icons/io5";
function Notes({ handleCloseNotes }) {
  return (
    <div className="absolute m-5 w-full h-screen bg-[#4841418f] flex justify-center items-center">
      <div className="w-full max-w-96 p-5 bg-white min-h-96 rounded-lg overflow-y-auto">
        <div className="w-full border-b-2 pb-2 flex items-center justify-between">
          <h1 className="text-2xl flex gap-3 items-center">
            <CgNotes />
            Notes
          </h1>

          <IoCloseCircleSharp
            className="text-3xl cursor-pointer"
            color="red"
            onClick={handleCloseNotes}
          />
        </div>

        <label
          for="message"
          class="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="20"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <button
          type="submit"
          class="w-full mt-5 flex justify-center items-center gap-3 py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <IoSave />
          Save Notes
        </button>
      </div>
    </div>
  );
}

export default Notes;
