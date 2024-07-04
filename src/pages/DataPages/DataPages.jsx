import React, { useState } from "react";
import Calendar from "../../components/Calendary/Calendary";
import Draggable from "../../components/Draggable/Draggable";
import { useDispatch, useSelector } from "react-redux";
import { fetchFieldsIdList, setFieldsId } from "../../store/slice/fields-slice";
export default function DataPages() {
  const dispatch = useDispatch();
  const { fields, fieldsId, fieldsIdList } = useSelector(
    (state) => state.fields
  );

  const getFootballFields = (id) => {
    dispatch(fetchFieldsIdList(id));
    dispatch(setFieldsId(id));
  };

  return (
    <div
      className={"flex flex-col gap-[20px] my-[85px] lg:my-[90px] xl:px-5 px-3"}
    >
      <div className={"flex items-center gap-3 flex-wrap"}>
        {fields?.map((res) => {
          return (
            <div
              key={res.id}
              className={`py-[12px] px-[16px] rounded-[8px] cursor-pointer border-[#2222221A] border-[1px]  ${
                res?.id === fieldsId
                  ? "bg-[#fff]"
                  : "bg-[#F0F0F0] duration-300 hover:bg-[#b9b9b9]"
              }`}
              onClick={() => getFootballFields(res.id)}
            >
              <div>
                <h3 className="text-[#222222] text-[14px] font-[500] text-[Ubuntu] leading-[20px]">
                  {res.name}
                </h3>
                <p className="text-[#222222] text-[12px] font-normal text-[Ubuntu] leading-[14px]">
                  Спортивный комплекс
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={"grid grid-cols-1 xl:grid-cols-3 gap-y-[20px] xl:gap-[20px]"}
      >
        <Draggable />
        <div className="col-span-2">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
