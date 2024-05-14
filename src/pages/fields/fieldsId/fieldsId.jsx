import React, { useEffect, useState } from "react";
import { FaDeleteLeft, FaPlus } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Review from "../../../components/Review/Review";
import Gallery from "../../../components/Gallery/Gallery";
import CustomerReviews from "../../../components/CustomerReviews/CustomerReviews";
import FieldsModal from '../../../components/Modal/FieldsModal';
import Schedule from '../../../components/Schedule/Schedule';
import DraggableFields from "../../../components/DraggableFields/DraggableFields";
import CalendarFields from "../../../components/CalendarFields/CalendarFields";
import Icon from '../../../img/foodbol.svg'
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFieldsIdDetail, fetchFieldsIdList } from "../../../store/slice/fields-slice";

export default function FieldsId() {
  const { id } = useParams();
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);
  const [request, setRequest] = useState(0);
  const dispatch = useDispatch()
  const [fieldValue, setFieldValue] = useState(false);
  const { fieldsIdList, fieldsIdDetail } = useSelector((state) => state.fields);

  useEffect(() => {
    dispatch(fetchFieldsIdList(id))
  }, [id])

  return (
    <>
      <div className="mt-[25px] lg:mt-[20px] flex flex-col gap-[20px]">
        <div style={{
          backgroundImage: "url(https://s3-alpha-sig.figma.com/img/696a/d53f/f12d7954e04dc1366cf76d70a5e06d46?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bqr595FS-9Jnnoz7MQeXaDXBqj9RjzjTGlCn0mcM9GfikckMEan9qFS45XrVUIu90Aprs35~buBA5OSPTeTbJx65KqvtHs2Gn03XOd9lIxoTTROatOKEORQ-pvDkYXr092tPnkepB~G733o1n9xVhLncWYr~G9dYha20S9Hv0AwFxyW5AiHhsC7bLRAP4ZMyXaota5l7JPUIwNl0PlBi5XkqirrKtQqT2P-3Xw-dPcqn4Z6DSB5yq9drv-sK5M6tyLSId5qbxAxuhAVITfsvVGGUXPnmHx7jAnh1t4zcQORpuh5TxGkeg6WZA2281dITxasa7E4lKYu~VLFH51ReWw__)",
        }} className="h-[200px] w-[100%]  ">
          <div className="flex flex-col items-center justify-center h-full gap-[10px]">
            <img className="w-[50px] " src={Icon} alt="" />
            <div className="text-center flex flex-col gap-2">
              <h4 className="text-[18px] leading-[20px] font-bold text-white">
                El Clasico
              </h4>
              <p className="text-white text-[13px] leading-[15px] font-normal opacity-70">Спортивный комплекс</p>
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-[20px] xl:px-5 px-4"}>
          <div
            className={
              "flex flex-col lg:flex-row justify-between lg:items-center gap-3"
            }
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => setRequest(0)}
                className={`w-[50%] lg:w-[auto]  text-[16px] leading-[20px] border-[#2222221A] border-[1px] rounded-[8px] px-[16px] py-[8px]  hover:bg-[#656565] hover:text-white duration-300 ${request === 0
                  ? "bg-[#656565] text-white"
                  : "bg-[#fff] text-[#1C1C1C]"
                  } `}
              >
                Описание
              </button>
              <button
                onClick={() => setRequest(1)}
                className={`w-[50%] lg:w-[auto]  text-[16px] leading-[20px] border-[#2222221A] border-[1px] rounded-[8px] px-[16px] py-[8px]  hover:bg-[#656565] hover:text-white   duration-300 ${request === 1
                  ? "bg-[#656565] text-white"
                  : "bg-[#fff] text-[#1C1C1C]"
                  } `}
              >
                Запросы
              </button>
            </div>
            <div className={"flex flex-col lg:flex-row items-center gap-3"}>
              <button
                onClick={() => setFieldValue(true)}
                className="w-full lg:w-auto flex justify-center items-center gap-1 p-[8px] bg-[#7384E8] rounded-[8px] hover:bg-[#4a60e0] duration-300"
              >
                <FaPlus className="xl:w-[18px] xl:h-[18px] w-[16px] h-[16px]  fill-white" />
                <span className="font-normal text-[14px] lg:text-[12px] xl:text-[14px] leading-[20px] text-[#fff]">
                  Забронировать поле
                </span>
              </button>
              <NavLink to={`/editFields`} className="w-full lg:w-auto flex justify-center items-center gap-1 p-[8px] bg-[#E5E5E5] rounded-[8px] hover:bg-[#9d9a9a] duration-300">
                <CiEdit className="xl:w-[18px] xl:h-[18px] w-[16px] h-[16px] fill-[#1C1C1C]" />
                <span className="font-normal text-[14px] lg:text-[12px] xl:text-[14px] leading-[20px] text-[#1C1C1C]">
                  Редактировать поле
                </span>
              </NavLink>
              <button className="w-full lg:w-auto flex justify-center items-center gap-1 p-[8px] bg-[#FFDEDE] rounded-[8px] hover:bg-[#cb8181] duration-300">
                <MdDelete className="xl:w-[18px] xl:h-[18px] w-[16px] h-[16px] fill-[#1C1C1C]" />
                <span className="font-normal text-[14px] lg:text-[12px] xl:text-[14px] leading-[20px] text-[#1C1C1C]">
                  Удалить поле
                </span>
              </button>
            </div>
          </div>
          {request === 0 ? (
            <>
              <div
                className={
                  "p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex justify-between items-center flex-col lg:flex-row  gap-[10px] "
                }
              >
                <div className="flex justify-center items-center gap-[20px] lg:gap-[15px] xl:gap-[20px]">

                  <button
                    onClick={() => setActive(0)}
                    className={`font-[600] text-[14px] leading-[20px] text-[#1C1C1C]  hover:text-[red] hover:opacity-100  duration-300 pb-[2px] px-1 ${active === 0
                      ? "opacity-100 border-[#1C1C1C] border-b-[1px] "
                      : "opacity-50"
                      }`}
                  >
                    Обзор
                  </button>
                  <button
                    onClick={() => setActive(1)}
                    className={`font-[600] text-[14px] leading-[20px] text-[#1C1C1C]  hover:text-[red] hover:opacity-100  duration-300 pb-[2px] px-1 ${active === 1
                      ? "opacity-100 border-[#1C1C1C] border-b-[1px] "
                      : "opacity-50"
                      }`}
                  >
                    Галерея
                  </button>
                  <button
                    onClick={() => setActive(2)}
                    className={`font-[600] text-[14px] leading-[20px] text-[#1C1C1C]  hover:text-[red] hover:opacity-100  duration-300 pb-[2px] px-1 ${active === 2
                      ? "opacity-100 border-[#1C1C1C] border-b-[1px] "
                      : "opacity-50"
                      }`}
                  >
                    График
                  </button>
                  <button
                    onClick={() => setActive(3)}
                    className={`font-[600] text-[14px] leading-[20px] text-[#1C1C1C]  hover:text-[red] hover:opacity-100  duration-300 pb-[2px] px-1 ${active === 3
                      ? "opacity-100 border-[#1C1C1C] border-b-[1px] "
                      : "opacity-50"
                      }`}
                  >
                    Отзывы
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full lg:w-auto">
                  {fieldsIdList?.map((item) => {
                    return (
                      <button onClick={() => {
                        dispatch(fetchFieldsIdDetail(item?.id))
                      }}
                        className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 hover:border-[2px] duration-300 text-[#1C1C1C] border-[#222222] rounded-[8px] ${fieldsIdDetail?.id === item?.id ? "opacity-100 border-[2px]" : "opacity-70 border-[1px]"
                          }`
                        }
                      >
                        {item?.name}
                      </button>
                    )
                  }
                  )}
                </div>
              </div>
              <div>
                {active === 0 && <Review />}
                {active === 1 && <Gallery />}
                {active === 2 && <Schedule />}
                {active === 3 && <CustomerReviews />}
              </div>
            </>
          ) : (
            <>
              <div className={'grid grid-cols-1 xl:grid-cols-3 gap-y-[20px] xl:gap-[20px]'}>
                <DraggableFields />
                <div className='col-span-2'>
                  <CalendarFields />
                </div>
              </div>
            </>
          )}
        </div>
      </div >
      {fieldValue && <FieldsModal setFieldValue={setFieldValue} />
      }
    </>
  );
}
