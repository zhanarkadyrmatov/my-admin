import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import blockimage from "../../img/blockimage.svg";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaPlus } from "react-icons/fa6";
import img6 from "../../img/img6.svg";
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";


export default function ReserveModal({ setReserve, setFieldValue, fieldValue }) {
  const { fields } = useSelector((state) => state.fields);
  const [fieldDelete, setFieldDelete] = useState(false);
  const [modalValue, setModalValue] = useState(true);
  const [page, setPage] = useState(null);


  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center  z-[1000]">
        <div onClick={() => setReserve(false)} className='absolute top-0 left-0 h-full w-full bg-[#000] opacity-50' />
        {modalValue ? (<div className='bg-white absolute rounded-[15px] w-[1200px] h-[70%] p-[20px]  flex flex-col gap-2'>
          <p className='text-[20px] font-[500] text-[#000]'>Выберите поле</p>
          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] 3xl:grid-cols-4"
            }
          >
            {fields?.map((item) => (
              <div className={""}>
                <div
                  className={
                    "w-[100%] relative shadow-lg top-0 left-0 right-0 rounded-[15px]"
                  }
                >
                  <div className={"w-[100%]"}>
                    <div className={"w-[100%]"}>
                      <div
                        className={
                          "absolute top-[12px] right-[12px] flex items-center gap-[10px] "
                        }
                      >
                        <div className="w-[36px] h-[36px] cursor-pointer bg-[#fff] backdrop-blur-sm rounded-full flex justify-center items-center bg-opacity-30 duration-300	hover:scale-105">
                        <MdOutlineRemoveRedEye className={"w-[20px] h-[20px] fill-white "}/>
                        </div>
                        <div onClick={() => {
                          setFieldDelete(!fieldDelete)
                        }} className="w-[36px] h-[36px] cursor-pointer bg-[#fff] backdrop-blur-sm rounded-full flex justify-center items-center bg-opacity-30 duration-300	hover:scale-105">
                          <MdDeleteOutline className={"w-[20px] h-[20px] fill-white "}/>
                        </div>
                        <div className="w-[36px] h-[36px] cursor-pointer bg-[#fff] backdrop-blur-sm rounded-full flex justify-center items-center bg-opacity-30 duration-300	hover:scale-105">
                          <FaPlus className={"w-[20px] h-[20px] fill-white "}/>
                        </div>
                      </div>
                      <button className={"w-[100%]"}
                        onClick={() => {
                          setModalValue(false)
                          setPage(item?.id)
                        }}>
                        <img
                          className={"w-[100%] h-[160px] object-cover rounded-t-[15px]"}
                          src={item?.main_foto || blockimage}
                          alt=""
                        />
                      </button>
                      <div
                        className={
                          "absolute top-[115px] left-0 z-10 bg-[#FFF]  py-[6px] pl-[14px] pr-[20px] rounded-r-[6px] backdrop-blur-sm bg-opacity-30"
                        }
                      >
                        <h4
                          className={
                            "text-[14px] leading-[16px] font-[500] text-[#fff]"
                          }
                        >
                          {item?.min_price} сом / час
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="px-[14px] py-[10px]">
                    <div className={"flex flex-col gap-[10px]"}>
                      <div className={""}>
                        <h4 className="text-[16px] leading-[19px] font-[500] text-[#222222]">
                          {item?.name}
                        </h4>
                        <p className="text-[#222222] text-[12px] leading-[16px] font-[500] opacity-70">
                          Спортивный комплекс
                        </p>
                      </div>
                      <div className={"flex justify-start items-center gap-[10px]"}>
                        {item?.advantages?.map((el) => (
                          <img className={"w-[20px] h-[20px]"} src={el?.advantages?.icon} alt="" />
                        ))}
                      </div>
                      <div className={"flex justify-start items-center gap-1"}>
                        <p className="text-[#222222] text-[14px] leading-[16px] font-[500]">
                          {item?.avg_rating?.toFixed(1)} ({item?.rating_num})
                        </p>
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={item?.avg_rating}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>) : (
          <div className="absolute  w-[90%] z-[1001] md:w-[521px] min-h-[242px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]   bg-white rounded-lg shadow-lg p-[20px]">
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
                <NavLink to={`/reserve/${page}/`}
                  state={{ reserve: false }}
                  onClick={() => setReserve(false)}
                  className="py-[11px] px-[20px] w-[100%] rounded-[8px] bg-gray-300 text-base font-medium leading-6 text-center"
                >
                  Несуществующий
                </NavLink>
                <NavLink to={`/reserve/${page}/`}
                  state={{ reserve: true }}
                  onClick={() => setReserve(false)}
                  className="py-[11px] px-[20px] w-[100%] rounded-[8px] bg-gradient-to-br from-purple-700 to-purple-600 text-white bg-opacity-90 whitespace-nowrap">
                  Существующий пользователь
                </NavLink>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}
