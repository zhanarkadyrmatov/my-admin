import React from "react";
import Icon from "../../img/star.svg";
import { MdOutlineStar } from "react-icons/md";
import { useSelector } from "react-redux";
import moment from 'moment';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function CustomerReviews() {
  const { fieldsIdList, fieldsComments } = useSelector((state) => state.fields);
  const formattedDate = (date) => {
    return moment(date).format('DD.MM.YYYY   HH:mm')
  }


  const totalApples = fieldsIdList?.rating_num;
  const oneRate = (fieldsIdList?.one_rate / totalApples) * 100;
  const twoRate = (fieldsIdList?.two_rate / totalApples) * 100;
  const threeRate = (fieldsIdList?.three_rate / totalApples) * 100;
  const fourRate = (fieldsIdList?.four_rate / totalApples) * 100;
  const fiveRate = (fieldsIdList?.five_rate / totalApples) * 100;





  return (
    <div className="grid grid-cols-1  xl:grid-cols-3 gap-y-[20px] xl:gap-[20px]">
      <div className="">
        <div className="p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]">
          <h4 className="text-[16px] leading-[18px] font-bold">Оценка</h4>
        </div>
        <div className="p-[20px] bg-white rounded-b-[12px] flex justify-center items-center gap-[14px] md:gap-[20px] xl:gap-[14px] ">
          <div>
            <h4 className="text-[53px] leading-[60px] text-[#222222] font-bold">
              {fieldsIdList?.avg_rating?.toFixed(1)}
            </h4>
            <p className="text-[14px] leading-[16px] text-[#222222]  font-normal opacity-50 flex items-center gap-1">
              <span>{fieldsIdList?.rating_num}</span> <span>оценок</span>
            </p>
          </div>
          <div className={"flex flex-col gap-[2px]"}>
            <div className={"grid grid-cols-[5fr_7fr] justify-between items-center md:gap-x-[20px] gap-x-[10px]"}>
              <div className="flex flex-col gap-[2px]">
                <div className="flex items-center gap-[1px]">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <>
                        <img className="w-[18px] h-[18px]" src={Icon} alt="" />
                      </>
                    )
                  })}
                </div>
                <div className="flex items-center gap-[1px]">
                  {[1, 2, 3, 4].map((item, index) => {
                    return (
                      <>
                        <img className="w-[18px] h-[18px]" src={Icon} alt="" />
                      </>
                    )
                  })}
                </div>
                <div className="flex items-center gap-[1px]">
                  {[1, 2, 3].map((item, index) => {
                    return (
                      <>
                        <img className="w-[18px] h-[18px]" src={Icon} alt="" />
                      </>
                    )
                  })}
                </div>
                <div className="flex items-center gap-[1px]">
                  {[1, 2].map((item, index) => {
                    return (
                      <>
                        <img className="w-[18px] h-[18px]" src={Icon} alt="" />
                      </>
                    )
                  })}
                </div>
                <div className="flex items-center gap-[1px]">
                  {[1].map((item, index) => {
                    return (
                      <>
                        <img className="w-[18px] h-[18px]" src={Icon} alt="" />
                      </>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className={""}>
                  <div className="relative w-[100%] h-[8px]  rounded-full bg-[#C0C0C0]">
                    <div
                      style={{
                        width: `${oneRate}%`,
                      }}
                      className={`absolute top-0 left-0 bottom-0 rounded-full bg-[#DF2323]`}
                    ></div>
                  </div>
                </div>
                <div className={""}>
                  <div className="relative w-[100%] h-[8px]  rounded-full bg-[#C0C0C0]">
                    <div
                      style={{
                        width: `${twoRate}%`,
                      }}
                      className={`absolute top-0 left-0 bottom-0 rounded-full bg-[#DF2323]`}
                    ></div>
                  </div>
                </div>
                <div className={""}>
                  <div className="relative w-[100%] h-[8px]  rounded-full bg-[#C0C0C0]">
                    <div
                      style={{
                        width: `${threeRate}%`,
                      }}
                      className={`absolute top-0 left-0 bottom-0 rounded-full bg-[#DF2323]`}
                    ></div>
                  </div>
                </div>
                <div className={""}>
                  <div className="relative w-[100%] h-[8px]  rounded-full bg-[#C0C0C0]">
                    <div
                      style={{
                        width: `${fourRate}%`,
                      }}
                      className={`absolute top-0 left-0 bottom-0 rounded-full bg-[#DF2323]`}
                    ></div>
                  </div>
                </div>
                <div className={""}>
                  <div className="relative w-[100%] h-[8px]  rounded-full bg-[#C0C0C0]">
                    <div
                      style={{
                        width: `${fiveRate}%`,
                      }}
                      className={`absolute top-0 left-0 bottom-0 rounded-full bg-[#DF2323]`}
                    ></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        {fieldsComments?.results?.length > 0 && (
          <>
            <div className=" p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]">
              <h4 className="text-[16px] leading-[18px] font-bold">
                Все отзывы
              </h4>
            </div>
            <div className="p-[20px] bg-white rounded-b-[12px] flex flex-col gap-[20px]">
              {fieldsComments?.results?.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col gap-[6px]">
                    <div className="flex justify-between items-center gap-[10px]">
                      <div className="flex items-center gap-[10px] pt-[10px] pb-[5px]">
                        <img
                          className="w-[50px] h-[50px] object-cover rounded-full"
                          src={
                            item?.author?.photo ||
                            "https://images.vexels.com/media/users/3/140752/isolated/preview/17e31e592ab23bb0e8b2c0e76c0a4361-male-profile-avatar-5.png"
                          }
                          alt=""
                        />
                        <div className="flex flex-col gap-[2px]">
                          <h4 className="text-[15px] leading-[20px] text-[#222222] font-bold">
                            {item?.author?.name} {item?.author?.surname}
                          </h4>
                          <div className="text-[14px] leading-[18px] text-[#222222] font-bold flex justify-start items-center gap-1">
                            <span>{item?.author?.avg_rating?.toFixed(1)}</span>
                            <img
                              src={Icon}
                              className="w-[16px] h-[16px]"
                              alt=""
                            />
                            <span>CAM</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[14px] leading-[16px] text-[#222222] font-normal opacity-70">
                        {formattedDate(item?.created_at)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                        {item?.text}
                      </p>
                      {item?.photo && (
                        <img
                          className="w-[100%] h-[150px] rounded-[12px] object-cover"
                          src={item?.photo}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
