import React, { useState } from "react";
import img6 from "../../img/img6.svg";

export default function Alert({ setAlert }) {

  return (
    <div>
      <div>
        <div onClick={() => setAlert(false)} className="fixed top-0 left-0 h-full w-full flex items-center justify-center flex-col bg-gray-200 opacity-70 z-50"></div>
        <div className="fixed  w-[90%] md:w-[521px] min-h-[242px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  z-[150] bg-white rounded-lg shadow-lg p-[20px]">
          <div className="grid grid-rows-1 gap-y-[12px]">
            <img className="mx-auto" src={img6} alt="" />
            <h4 className="text-20 font-semibold leading-26 text-center text-gray-700">
              alert text
            </h4>
            <p className="text-base font-normal leading-6 text-center text-gray-700">
              Warning text of an exemplary nature should be kept as concise as
              possible.
            </p>
            <div className="flex flex-col md:flex-row  justify-center items-center gap-[12px]">
              <button
                className="py-[11px] px-[20px] w-[100%] rounded-[8px] bg-gray-300 text-base font-medium leading-6 text-center"
              >
                Несуществующий
              </button>
              <button className="py-[11px] px-[20px] w-[100%] rounded-[8px] bg-gradient-to-br from-purple-700 to-purple-600 text-white bg-opacity-90 whitespace-nowrap">
                Существующий пользователь
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}