import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useLocation, useParams } from "react-router-dom";
import ReserveDatepicker from "../../components/ReserveDatepicker/ReserveDatepicker";
import { useDispatch, useSelector } from "react-redux";
import { fetchFieldsIdDetail, setFootballId, setSelectValue } from "../../store/slice/fields-slice";
import { fetchReverse } from "../../store/slice/reserve-slice";
import moment from 'moment';
import { differenceInMinutes, parse, format, addDays } from 'date-fns';

function Reserve() {
  const { id } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const { footballId, fieldsIdList, fieldsIdDetail } = useSelector((state) => state.fields)
  const { reverse } = useSelector((state) => state.reserveSlice);

  useEffect(() => {
    dispatch(fetchReverse({ footballId, startDate }))
  }, [footballId])

  const dayOfWeek = fieldsIdDetail?.schedule?.find((el) => el?.day_of_week === startDate.getDay());

  const startTime = dayOfWeek?.start_time?.slice(0, 5) || '06:00';
  const endTime = dayOfWeek?.end_time?.slice(0, 5) || '06:00';
  const start = parse(startTime, 'HH:mm', startDate);
  const end = addDays(parse(endTime, 'HH:mm', startDate), 1);
  const minutesDifference = differenceInMinutes(end, start);
  const intervals = minutesDifference / 30;
  const intervalsArray = [];

  for (let i = 0; i < intervals; i++) {
    const intervalStart = new Date(start.getTime() + i * 30 * 60 * 1000);
    const intervalEnd = new Date(intervalStart.getTime() + 30 * 60 * 1000);
    intervalsArray.push({
      start: format(intervalStart, 'HH:mm'),
      end: format(intervalEnd, 'HH:mm')
    });
  }

  console.log(reverse, 'reverse')

  return (
    <div className="my-[85px] md:my-[90px] flex flex-col gap-[20px] xl:px-5 lg:px-4 px-3">
      <div
        className={
          "p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex justify-between items-center flex-col lg:flex-row  gap-[10px] "
        }
      >
        <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full lg:w-auto">
          {fieldsIdList?.football_field_type?.map((item) => (
            <button
              onClick={() => {
                dispatch(fetchFieldsIdDetail(item?.id))
                dispatch(setFootballId(item?.id))
              }}
              className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 hover:border-[2px] duration-300 text-[#1C1C1C] border-[#222222] rounded-[8px] ${footballId === item?.id ? "opacity-100 border-[2px]" : "opacity-80 border-[1px]"
                }`
              }
            >
              {item?.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[20px] lg:gap-[20px]">
        <div className="">
          <div className="p-[20px] rounded-t-[10px] bg-[#fff]">
            <p className="text-[15px] text-[#1C1C1C] font-normal leading-[18px]">
              Выберите дату и время
            </p>
          </div>
          <div>
            <ReserveDatepicker setStartDate={setStartDate} startDate={startDate} />
          </div>
          <div className="p-[20px] rounded-b-[10px] bg-[#fff] flex flex-col gap-[10px] overflow-y-auto h-[65vh]">
            {intervalsArray?.map((res, i) => {
              return (
                <div key={i}
                  className={`px-[20px] py-[10px] rounded-[10px] ${true
                    ? "bg-[#fff] border-[1px] border-[#2222221A] opacity-70"
                    : "bg-[#F5F5F5]"
                    } `}
                >
                  <div className="flex justify-between items-center gap-2">
                    <div className="flex flex-col gap-[6px]">
                      <p className="text-[12px] text-[#222222 font-normal leading-[14px] opacity-70">
                        Время:
                      </p>
                      <p className="text-[15px] text-[#222222] font-normal leading-[18px]">
                        {res?.start} - {res?.end}{" "}
                      </p>
                    </div>
                    {true ? (
                      <p className="text-[14px] text-[#222222] font-normal leading-[16px]">
                        Занято
                      </p>
                    ) : (
                      <div className="flex flex-col gap-[6px]">
                        <p className="text-[12px] text-[#222222 font-normal leading-[14px] opacity-70">
                          Цена:
                        </p>
                        <p className="text-[15px] text-[#222222] font-normal leading-[18px]">
                          1000 сом
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          {state?.reserve ? (
            <>
              <div className="p-[20px] rounded-[10px] bg-[#fff] flex flex-col gap-[10px]">
                <p className="text-[15px] text-[#1C1C1C] font-normal leading-[18px] opacity-70">
                  Добавить пользователя
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <FaSearch className="w-[16px] h-[16px] opacity-40" />
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="Search"
                    placeholder="Поиск"
                  />
                </div>
                <div>
                  <div className="p-[10px] bg-[#F3F3F3] rounded-[8px] flex justify-between items-center">
                    <div className="flex items-center gap-[10px]">
                      <img
                        className="w-[40px] h-[40px] object-cover rounded-full"
                        src="https://picsum.photos/200"
                        alt=""
                      />
                      <p className="text-[#222222] text-[15px] font-normal leading-[20px]">
                        ataialanov
                      </p>
                    </div>
                    <FaPlus className="w-6 h-6 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="p-[20px] rounded-[10px] bg-[#fff] flex flex-col gap-[10px]">
                <p className="text-[15px] text-[#1C1C1C] font-normal leading-[18px] opacity-70">
                  Добавить арбитра
                </p>
                <div>
                  <div className="p-[10px] bg-[#F3F3F3] rounded-[8px] flex justify-between items-center">
                    <div className="flex items-center gap-[10px]">
                      <img
                        className="w-[40px] h-[40px] object-cover rounded-full"
                        src="https://picsum.photos/200"
                        alt=""
                      />
                      <p className="text-[#222222] text-[15px] font-normal leading-[20px]">
                        Добавить
                      </p>
                    </div>
                    <FaPlus className="w-6 h-6 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="p-[20px]  rounded-[10px] bg-[#fff] flex justify-between items-center gap-2">
                <p className="text-[15px] text-[#1C1C1C] font-normal leading-[18px]">
                  Повтор
                </p>
                <select
                  className="text-[15px] text-[#1C1C1C] font-normal leading-[18px] outline-none "
                  name=""
                  id=""
                >
                  <option value="">Каждую неделю</option>
                  <option value="">Каждые месяц недели </option>
                  <option value="">Каждые год недели</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div className="p-[20px] rounded-[10px] bg-[#fff] flex flex-col gap-[10px]">
                <p className="text-[15px] text-[#1C1C1C] font-normal leading-[18px] opacity-70">
                  Добавить пользователя
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="text"
                    placeholder="ФИО"
                  />
                </div>
              </div>
              <div className="p-[20px] rounded-[10px] bg-[#fff] flex flex-col gap-[10px]">
                <p className="text-[15px] text-[#1C1C1C] font-normal leading-[18px] opacity-70">
                  Номер телефона
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px] outline-none  bg-transparent "
                    type="text"
                    placeholder="Номер телефона"
                  />
                </div>
              </div>
            </>
          )}
          <div className="p-[20px] rounded-[10px] bg-[#fff] flex flex-col gap-[10px]">
            <p className="text-[15px] text-[#1C1C1C] font-normal leading-[18px] opacity-70">
              Способ оплаты
            </p>
            <div className="flex items-center gap-x-[30px]">
              <div className="flex items-center gap-x-[10px]">
                <input type="radio" name="radio" />
                <label className="font-normal text-[16px] leading-[19px] text-[#222222]">
                  Наличными
                </label>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <input type="radio" name="radio" />
                <label className="font-normal text-[16px] leading-[19px] text-[#222222]">
                  Онлайн
                </label>
              </div>
            </div>
          </div>
          <button className="w-full p-[8px] rounded-[8px]  border bg-[#7384E8] hover:bg-[#304add] duration-300 font-normal text-white text-[16px] leading-[19px]">
            Забронировать поле
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
