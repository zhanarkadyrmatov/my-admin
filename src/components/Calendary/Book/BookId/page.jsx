import React, { useState } from "react";
import { useParams } from "react-router-dom";
import s from "./page.module.scss";
import { CiBaseball } from "react-icons/ci";
import { IoFootballOutline } from "react-icons/io5";
const BookId = () => {
  const { bookId } = useParams();

  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div className={s.bookId}>
      <ul className="flex  gap-[10px] ">
        <li
          onClick={() => setPageIndex(0)}
          className={`text-[#505050] dark:text-[#e4e3e3] hover:text-[#000] cursor-pointer hover:dark:text-[#ffffff] ${
            pageIndex === 0
              ? "border-b border-solid border-[#000] dark:border-[#fff]"
              : ""
          }`}
        >
          Обзор
        </li>
        <li
          onClick={() => setPageIndex(1)}
          className={`text-[#505050] dark:text-[#e4e3e3] hover:text-[#000] cursor-pointer hover:dark:text-[#ffffff] ${
            pageIndex === 1
              ? "border-b border-solid border-[#000] dark:border-[#fff]"
              : ""
          }`}
        >
          График / Контакты
        </li>
        <li
          onClick={() => setPageIndex(2)}
          className={`text-[#505050] dark:text-[#e4e3e3] hover:text-[#000] cursor-pointer hover:dark:text-[#ffffff] ${
            pageIndex === 2
              ? "border-b border-solid border-[#000] dark:border-[#fff]"
              : ""
          }`}
        >
          Галерея
        </li>
      </ul>
      {pageIndex === 0 && (
        <div className="text-[#000] dark:text-[#fff] flex gap-[30px] flex-col">
          <div className="flex gap-[15px] flex-col">
            <h3 className="text-[#000] dark:text-[#fff] text-20px] md:text-[30px]">
              Преимущества
            </h3>
            <div className={s.CiBaseball}>
              {[1, 3, 4, 5, 6, 7, 8, 9, 9, 9].map((res, i) => (
                <div className="flex gap-[15px]  border border-solid border-[#000] dark:border-[#fff] p-[15px] rounded-[20px]">
                  <span className="text-[#000] dark:text-[#fff]  border border-solid border-[#000] dark:border-[#fff] rounded-full p-[5px]">
                    <IoFootballOutline size={60} />
                  </span>
                  <span className="flex flex-col  align-middle h-full justify-center">
                    <h2 className="text-[#000] dark:text-[#fff]   text-left  text-[20px] font-[500]">
                      Возможность{" "}
                    </h2>
                    <p className="text-[#000] dark:text-[#fff]  text-left ">
                      по дате{" "}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-[15px] flex-col">
            <h3 className="text-[#000] dark:text-[#fff] text-20px] md:text-[30px]">
            Описание
            </h3>
            <div className={s.CiBaseball}>
              {[1, 9, 9].map((res, i) => (
                <div className="flex gap-[15px]  border border-solid border-[#000] dark:border-[#fff] p-[15px] rounded-[20px]">
                  <span className="text-[#000] dark:text-[#fff]  border border-solid border-[#000] dark:border-[#fff] rounded-full p-[5px]">
                    <IoFootballOutline size={60} />
                  </span>
                  <span className="flex flex-col  align-middle h-full justify-center">
                    <h2 className="text-[#000] dark:text-[#fff]   text-left  text-[20px] font-[500]">
                      Возможность{" "}
                    </h2>
                    <p className="text-[#000] dark:text-[#fff]  text-left ">
                      по дате{" "}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {pageIndex === 1 && (
        <div className="text-[#000] dark:text-[#fff]">asdasdasd2 </div>
      )}
      {pageIndex === 2 && (
        <div className="text-[#000] dark:text-[#fff]">asdasdasd3 </div>
      )}
      <div className="text-[#fff] dark:text-[#fff] bg-[#0A9829] p-[15px] rounded-[10px] cursor-pointer  justify-center flex  text-[17px] ">Забронировать поле</div>
    </div>
  );
};

export default BookId;
