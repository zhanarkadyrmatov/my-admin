import React from 'react'
import Icon from '../../img/avatarNone.png'
import Avatar from '../../img/avatarNone.png'
import { useSelector } from 'react-redux';
import { FaWhatsapp } from "react-icons/fa6";
import Grass from '../../img/grass.svg';


export default function Review() {
  const { fieldsIdList, fieldsIdDetail } = useSelector((state) => state.fields);


  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]'>
      <div className=''>
        <div className='p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]'>
          <h4 className='text-[16px] leading-[18px] font-bold'>Преимущества</h4>
        </div>
        <div className='px-[20px] py-[5px] bg-white rounded-b-[12px] '>
          {fieldsIdList?.advantages?.map((item) => {
            return (
              <div className='flex items-center gap-[8px] pt-[10px] pb-[5px]'>
                <div className='min-w-[40px] min-h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
                  <img className='w-[24px] h-[24px]' src={item?.icon || Icon} alt="" />
                </div>
                <div>
                  <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>{item?.name}</h4>
                  <p className='text-[13px] leading-[16px] text-[#222222]  font-normal opacity-70'>{item?.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className=''>
        <div className='p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]'>
          <h4 className='text-[16px] leading-[18px] font-bold'>Описание</h4>
        </div>
        <div className='px-[20px] py-[5px] bg-white rounded-b-[12px] '>
          <div className='flex items-center gap-[8px] pt-[10px] pb-[5px]'>
            <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
              <img className='w-[24px] h-[24px]' src={Grass} alt="" />
            </div>
            <div>
              <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>Тип поля</h4>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal opacity-70 flex items-center gap-2 '>
                {fieldsIdDetail?.construction_type?.map((item) => {
                  return (
                    <span>{item}</span>
                  )
                })}
              </p>
            </div>
          </div>
          {fieldsIdDetail?.price?.map((item) => {
            return (
              <div className='flex items-center gap-[8px] pt-[10px] pb-[5px]'>
                <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
                  <img className='w-[24px] h-[24px]' src={Icon} alt="" />
                </div>
                <div>
                  <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>Цена с {item?.start_time} до {item?.end_time}</h4>
                  <p className='text-[13px] leading-[16px] text-[#222222]  font-normal opacity-70'>{item?.price} сом / час</p>
                </div>
              </div>
            )
          })}
          <p className='text-[15px] leading-[21px] text-[#222222] font-normal opacity-80 py-[10px] text-justify'>{fieldsIdDetail?.description}</p>
        </div>
      </div>
      <div className=''>
        <div className='p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]'>
          <h4 className='text-[16px] leading-[18px] font-bold'>Контакты</h4>
        </div>
        <div className='px-[20px] py-[5px] bg-white rounded-b-[12px] '>
          <div className='flex items-center gap-[8px] pt-[10px] pb-[5px]'>
            <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
              <img className='w-full h-full' src={fieldsIdDetail?.administrator?.photo || Avatar} alt="" />
            </div>
            <div>
              <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>{fieldsIdDetail?.administrator?.name} {fieldsIdDetail?.administrator?.surname}</h4>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal opacity-70'>Администратор</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-[2px] py-[15px]'>
            <div className='flex flex-col items-center gap-1'>
              <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
                <FaWhatsapp className='w-[24px] h-[24px]' />
                {/* <img src={Icon} alt="" /> */}
              </div>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal'>Whats’App</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
                <img className='w-[24px] h-[24px]' src={Icon} alt="" />
              </div>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal'>Whats’App</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
                <img className='w-[24px] h-[24px]' src={Icon} alt="" />
              </div>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal'>Whats’App</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
                <img className='w-[24px] h-[24px]' src={Icon} alt="" />
              </div>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal'>Whats’App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
