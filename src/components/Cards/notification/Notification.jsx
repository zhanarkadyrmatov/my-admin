import React from "react";
import modal from "../../../img/modal.png";

export default function Notification() {
  return (
    <div className="pb-2 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <img className="w-[50px] h-[50px] rounded-lg" src={modal} alt="" />
        <div>
          <h6 className="text-[0.938rem] mb-1 !important">
            Dr sultads Send you Photo
          </h6>
          <small className="text-[0.813rem] text-gray-500">
            29 July 2020 - 02:26 PM
          </small>
        </div>
      </div>
    </div>
  );
}
