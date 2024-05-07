import React from "react";
import BookId from "../../components/Cards/BookId/BookId";
import { GoPlus } from "react-icons/go";
export default function page() {
  const build = () => {
    window.location.href = "/calendary/fields";
  };
  return (
    <div className={'flex flex-col gap-[20px] mt-[55px] lg:mt-[50px] xl:mt-[40px]'}>
      <div className={'flex md:flex-row flex-col justify-between md:items-center gap-[15px]'}>
        <h4 className="text-xl font-bold leading-5 text-left text-gray-700">Футбольные поля</h4>
        <button className={'px-3 py-2 bg-[#7384E8] rounded-[12px] flex justify-center items-center gap-2'}>
          <GoPlus color="#fff" className="w-[24px] h-[24px]" />
          <p className="text-[14px]  font-bold leading-5  text-white">Добавить футбольное поле</p>
        </button>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]'}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <BookId key={i} />
        ))}
      </div>
    </div>
  );
}
