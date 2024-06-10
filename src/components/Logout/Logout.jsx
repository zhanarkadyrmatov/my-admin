import React from 'react'
import img6 from '../../img/img6.svg'

export default function Logout({ setLogout }) {
  const handleLogout = () => {
    window.location.href = "/";
    localStorage.removeItem("token");
  };


  return (
    <div>
      <div className='relative'>
        <div onClick={() => setLogout(false)} className="fixed top-0 left-0 h-full w-full flex items-center justify-center flex-col bg-[#F7F7F7] opacity-70 z-[1000]"></div>
        <div className="fixed  w-[90%] md:w-[521px] min-h-[242px] left-[50%] top-[50%] translate-x-[-50%] z-[1001] translate-y-[-50%] bg-white rounded-lg shadow-lg p-[20px]">
          <div className="grid grid-rows-1 gap-y-[12px]">
            <img className="mx-auto" src={img6} alt="" />
            <h4 className="text-20 font-semibold leading-26 text-center text-gray-700">
              Вы действительно хотите выйти?
            </h4>
            <p className="text-base font-normal leading-6 text-center text-gray-700">
              Warning text of an exemplary nature should be kept as concise as
              possible.
            </p>
            <div className="flex flex-col md:flex-row  justify-center items-center gap-[12px]">
              <button
                onClick={() => setLogout(false)}
                className="py-[11px] px-[20px] w-[100%] rounded-[8px] bg-[#F0F0F0] hover:bg-[#F0F0F0] duration-300 text-base font-medium leading-6 text-center"
              >
                Нет, не хочу
              </button>
              <button onClick={() => handleLogout()} className="py-[11px] px-[20px] w-[100%] rounded-[8px] bg-[#726EFB] hover:bg-[#544fe2] duration-300 text-white bg-opacity-90 whitespace-nowrap">
                Да, хочу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
