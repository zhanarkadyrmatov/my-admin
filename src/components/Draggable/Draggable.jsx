import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../../store/slice/story";

export default function Draggable({ data }) {
  const [storyId, setStoryId] = useState(null);

  const dispatch = useDispatch();
  const { bookings, status, error } = useSelector((state) => state.story);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = data[0]?.id;
        setStoryId(id);
        dispatch(fetchBookings(id));
      } catch (error) {
        console.error("Error fetching story ID:", error);
      }
    };

    fetchData();
  }, [data, dispatch]);

  useEffect(() => {
    if (storyId) {
      dispatch(fetchBookings(storyId));
    }
  }, [storyId]);

  console.log(bookings, status, "stories");

  function formatDate({ date }) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("ru-RU", options).format(date);
  }

  const redireact = () => {
    window.location.href = "/calendary/book";
  };

  return (
    <div>
      <div
        className={"bg-[#fff] p-[30px] rounded-[10px] flex flex-col gap-[20px]"}
      >
        {data.length === 0 ? (
          <div>нет данных</div>
        ) : (
          <>
            <div className={""}>
              <div className={"flex justify-between items-center gap-1"}>
                <h4
                  className={
                    "font-normal text-[24px] text-[#000] leading-normal"
                  }
                >
                  Calendar
                </h4>
                <select
                  onChange={(e) => setStoryId(e.target.value)}
                  value={storyId}
                  name=""
                  id=""
                >
                  {data.map((res, i) => (
                    <option key={i} value={res.id}>
                      {res.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <table
              className={
                "flex flex-col gap-2 overflow-y-auto webkit-scrollbar webkit-scrollbar-track:[#423e3e1a] webkit-scrollbar-thumb"
              }
            >
              <tr className={"grid grid-cols-4 gap-1"}>
                <td
                  className={
                    "col-span-2 text-[#AEAEAE] text-[16px] leading-[19px] font-normal"
                  }
                >
                  Имя
                </td>
                <td className="text-[#AEAEAE] text-[16px] leading-[19px] font-normal">
                  День
                </td>
                <td className="text-[#AEAEAE] text-[16px] leading-[19px] font-normal">
                  Время
                </td>
              </tr>
              {status === "loading" && <div>загрузка...</div>}
              {status === "fulfilled" &&
                bookings?.map((res, i) => (
                  <tr
                    key={i}
                    className={
                      "border-b-[1px] border-[#423e3e1a] py-[13px] grid grid-cols-4 "
                    }
                  >
                    <td
                      className={
                        "text-[#404040] text-[14px] leading-[19px] font-normal col-span-2"
                      }
                    >
                      {res.organizer_name}
                    </td>
                    <td
                      className={
                        "text-[#AEAEAE] text-[14px] leading-[19px] font-normal"
                      }
                    >
                      {formatDate(res.booking_date)}
                    </td>
                    <td
                      className={
                        "text-[#AEAEAE] text-[14px] leading-[19px] font-normal"
                      }
                    >
                      {res.start_time.slice(0, 5)}-{res.end_time.slice(0, 5)}
                    </td>
                  </tr>
                ))}
              {status === "fulfilled" && bookings?.length === 0 && (
                <div>нет данных</div>
              )}
            </table>
          </>
        )}
        <div className={""}>
          <button
            className="flex justify-center items-center gap-2 w-full py-[10px] px-4 rounded-xl  border bg-[#f93a0b] hover:bg-[#a43418] duration-300"
            onClick={() => redireact()}
          >
            <GoPlus className="w-[24px] h-[24px] fill-white" />
            <span className="font-medium border-[#f93a0b] text-base  text-white">
              Create New
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
