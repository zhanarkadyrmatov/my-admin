import React, { useState } from "react";
import { FaDeleteLeft, FaPlus } from "react-icons/fa6";
import None from "../../img/avatarNone.png";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

export default function Arbitrators({ arbitrator, setArbitrator }) {
  const [modal, setModal] = useState(false);
  const { arbitrators } = useSelector((state) => state.arbitratorSlice);

  return (
    <div>
      <div className="p-[20px] rounded-[10px] bg-[#fff] flex flex-col gap-[10px]">
        <p className="text-[15px] text-[#1C1C1C] font-normal leading-[18px] opacity-70">
          Добавить арбитра
        </p>
        <div className="relative">
          {arbitrator ? (
            <div
              onClick={() => setArbitrator(null)}
              className="p-[10px] bg-[#F3F3F3] rounded-[8px] flex justify-between items-center cursor-pointer hover:bg-[#b3b2b2] duration-300"
            >
              <div className="flex items-center gap-[10px]">
                <img
                  className="w-[40px] h-[40px] object-cover rounded-full"
                  src={arbitrator?.photo || None}
                  alt=""
                />
                <p className="text-[#222222] text-[15px] font-normal leading-[20px]">
                  {arbitrator?.name} {arbitrator?.surname}
                </p>
              </div>
              <MdDelete className="w-6 h-6 cursor-pointer" />
            </div>
          ) : (
            <div
              onClick={() => setModal(!modal)}
              className="p-[10px] bg-[#F3F3F3] rounded-[8px] flex justify-between items-center cursor-pointer hover:bg-[#b3b2b2] duration-300"
            >
              <div className="flex items-center gap-[10px]">
                <img
                  className="w-[40px] h-[40px] object-cover rounded-full"
                  src={None}
                  alt=""
                />
                <p className="text-[#222222] text-[15px] font-normal leading-[20px]">
                  Добавить
                </p>
              </div>
              <FaPlus className="w-6 h-6 cursor-pointer" />
            </div>
          )}
          {modal && (
            <>
              <div
                onClick={() => setModal(false)}
                className="fixed top-0 left-0 h-full w-full bg-transparent z-[10]"
              />
              <div className="absolute top-[0] w-full h-[400px] overflow-auto  right-0 bottom-0 left-0 bg-[#fff] rounded-md z-[100] duration-300 p-[20px] shadow-lg">
                <div className="flex flex-col gap-[12px]">
                  {arbitrators?.results?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setArbitrator(item);
                          setModal(false);
                        }}
                        className="p-[10px] bg-[#F3F3F3] rounded-[8px] flex justify-between items-center cursor-pointer hover:bg-[#b3b2b2] duration-300"
                      >
                        <div className="flex items-center gap-[10px]">
                          <img
                            className="w-[40px] h-[40px] object-cover rounded-full"
                            src={item?.photo || None}
                            alt=""
                          />
                          <p className="text-[#222222] text-[15px] font-normal leading-[20px]">
                            {item?.name} {item?.surname}
                          </p>
                        </div>
                        <FaPlus className="w-6 h-6 cursor-pointer" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
