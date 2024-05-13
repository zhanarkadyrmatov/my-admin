import React, { useEffect } from "react";
import BookId from "../../components/Cards/BookId/BookId";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { fetchFields } from "../../store/slice/fields-slice";
import { NavLink } from "react-router-dom";
export default function Fields() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFields());
  }, []);

  const { fields } = useSelector((state) => state.fields);

  console.log(fields, "fields");
  return (
    <div
      className={"flex flex-col gap-[20px] mt-[55px] lg:mt-[50px] xl:mt-[40px] xl:px-5 px-4"}
    >
      <div
        className={
          "flex md:flex-row flex-col justify-between md:items-center gap-[15px]"
        }
      >
        <h4 className="text-xl font-bold leading-5 text-left text-gray-700">
          Футбольные поля
        </h4>
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
    </div>
  );
}
