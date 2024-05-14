import React from 'react'
import Icon from '../../img/star.svg'
import { useSelector } from 'react-redux';

export default function Review() {
  const { fieldsIdList, fieldsIdDetail } = useSelector((state) => state.fields);

  console.log(fieldsIdDetail);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]'>
      <div className=''>
        <div className='p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]'>
          <h4 className='text-[16px] leading-[18px] font-bold'>Преимущества</h4>
        </div>
        <div className='px-[20px] py-[5px] bg-white rounded-b-[12px] '>
          {fieldsIdDetail?.advantages?.map((item) => {
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
          {fieldsIdDetail?.advantages?.map((item) => {
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

          <div className='flex items-center gap-[8px] pt-[10px] pb-[5px]'>
            <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
              <img className='w-[24px] h-[24px]' src={Icon} alt="" />
            </div>
            <div>
              <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>Мяч</h4>
              {/* <p className='text-[13px] leading-[16px] text-[#222222]  font-normal opacity-70'>2 кабины</p> */}
            </div>
          </div>
          <div className='flex items-center gap-[8px] pt-[10px] pb-[5px]'>
            <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
              <img className='w-[24px] h-[24px]' src={Icon} alt="" />
            </div>
            <div>
              <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>Душ</h4>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal opacity-70'>2 кабины</p>
            </div>
          </div>
          <div className='flex items-center gap-[8px] pt-[10px] pb-[5px]'>
            <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
              <img className='w-[24px] h-[24px]' src={Icon} alt="" />
            </div>
            <div>
              <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>Раздевалка</h4>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal opacity-70'>на 24 человек</p>
            </div>
          </div>
          <div className='flex items-center gap-[8px] pt-[10px] pb-[5px]'>
            <div className='w-[40px] h-[40px] border-[1px] border-[#2222221A] flex justify-center items-center rounded-full'>
              <img className='w-[24px] h-[24px]' src={Icon} alt="" />
            </div>
            <div>
              <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>Вода</h4>
            </div>
          </div>
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
              <img className='w-[24px] h-[24px]' src={Icon} alt="" />
            </div>
            <div>
              <h4 className='text-[15px] leading-[17px] text-[#222222] font-bold'>Илья Югай</h4>
              <p className='text-[13px] leading-[16px] text-[#222222]  font-normal opacity-70'>Администратор</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-[2px] py-[15px]'>
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
