import React, { useEffect, useState } from "react";
import BookId from "../../components/Cards/BookId/BookId";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { fetchFields } from "../../store/slice/fields-slice";
import { NavLink } from "react-router-dom";
import vertival from "../../img/vertical.svg";
import FiledList from "../../components/Cards/filedList/FiledList";
import Element3 from "../../img/element3";
export default function Fields({ item }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFields());
  }, []);

  const { fields } = useSelector((state) => state.fields);

  fields?.map((res) => {
    console.log(res);
  });
  console.log(fields, "fields");

  const [pages, setPages] = useState("home");

  const goToPages = (pageName) => {
    setPages(pageName);
  };

  return (
    <div
      className={
        "flex flex-col gap-[20px] my-[85px] lg:my-[95px] xl:px-5 lg:px-4 px-3"
      }
    >
      <div
        className={
          "flex md:flex-row flex-col justify-between md:items-center gap-[15px]"
        }
      >
        <h4 className="text-xl font-bold leading-5 text-left text-gray-700">
          Футбольные поля
        </h4>
        <div className="flex items-center gap-x-[12px]">
          <div
            onClick={() => setPages("about")}
            className={`w-[36px] h-[36px] rounded-[12px] p-[8px] ${
              pages === "about" ? "bg-[#000]" : "bg-[#E5E5E5]"
            }`}
          >
            <Element3 pages={pages} />
          </div>
          <div
            onClick={() => setPages("home")}
            className={`w-[36px] h-[36px] rounded-[12px] p-[8px] ${
              pages === "home" ? "bg-[#000]" : "bg-[#E5E5E5]"
            }`}
          >
            <Element3 />
          </div>
          <NavLink to="/fields/football">
            <button
              className={
                "px-3 py-2 bg-[#7384E8] rounded-[12px] flex justify-center items-center gap-2 "
              }
            >
              <GoPlus color="#fff" className="w-[24px] h-[24px]" />
              <p className="text-[14px]  font-bold leading-5  text-white">
                Добавить футбольное поле
              </p>
            </button>
          </NavLink>
        </div>
      </div>
      <>
        {pages === "home" && (
          <>
            {fields?.length > 0 ? (
              <div
                className={
                  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] 3xl:grid-cols-4"
                }
              >
                {fields?.map((item) => (
                  <BookId key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <p
                className={
                  "text-[14px] font-normal leading-5 text-[#222222] opacity-50 text-center mt-[10%]"
                }
              >
                По вашему запросу ничего не найдено
              </p>
            )}
          </>
        )}
        {pages === "about" && (
          <div className="w-full overflow-x-auto">
            <div className="w-[900px] xl:w-[100%]">
              <div className=" flex items-center w-full h-[58px] px-[30px] bg-[#acacac] border-t-0 border-l-0 border-r-0 rounded-t-2xl">
                <div className="px-[30px] w-full flex items-center gap-x-[40px]">
                  <h3>#</h3>
                  <div className="flex items-center justify-between w-full h-[20px] py-[10px]">
                    <li className="list-none text-[14px] font-normal leading-5 text-left">
                      Название
                    </li>
                    <li className="list-none text-[14px] font-normal leading-5 text-left text-[#1C1C1C]">
                      Тип
                    </li>
                    <li className="list-none text-[14px] font-normal leading-5 text-left text-[#1C1C1C]">
                      Преимущества
                    </li>
                    <li className="list-none text-[14px] font-normal leading-5 text-left text-[#1C1C1C]">
                      Оценка
                    </li>
                    <li className="list-none text-[14px] font-normal leading-5 text-left text-[#1C1C1C]">
                      Действие
                    </li>
                  </div>
                </div>
              </div>
              <div className="w-full  px-[20px] pb-[20px] rounded-bl-lg rounded-br-lg bg-[#FFFFFF]">
                {fields.map((res, i) => (
                  <div key={i}>
                    <FiledList item={res} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
