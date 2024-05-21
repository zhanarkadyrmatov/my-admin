import * as React from "react";
import { GoPlus } from "react-icons/go";
import Ellipse from "../../img/Ellipse.svg";
import Ellipse2 from "../../img/Ellipse2.svg";
import Acards from "../../components/Cards/arbitrCards/Acards";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export const BalanceCard = () => {
  return (
    <div className="mt-[100px] mx-[30px] ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            "DatePicker",
            "MobileDatePicker",
            "DesktopDatePicker",
            "StaticDatePicker",
          ]}
        >
          <div className="xl:grid-cols-[1.3fr_2fr] gap-x-[30px] w-full grid gap-y-[30px] grid-cols-1">
            <div className="w-full sm:flex justify-between items-center h-min bg-[#222222] text-white p-4 rounded-lg grid gap-y-[50px]">
              <div>
                <p
                  className="text-base font-normal leading-tight text-left opacity-70 text-[#FFFFFF]"
                  style={{ lineHeight: "18.38px" }}
                >
                  У вас на балансе
                </p>
                <h1
                  className="mt-1 text-2xl font-medium text-left"
                  style={{ lineHeight: "36.77px" }}
                >
                  15 000 сом
                </h1>
              </div>
              <img
                className="absolute z-[100] top-[-30px] left-[0px] transform rotate-[180deg] "
                src={Ellipse}
                alt=""
              />
              <img
                className="absolute top-[-60px] left-[60px]"
                src={Ellipse2}
                а
                alt=""
              />
              <div className=" ">
                <button className="mt-[-40px] flex gap-x-[8px] py-[10px] px-[16px] bg-[#FFFFFF4D] items-center text-white rounded-lg text-lg z-[200]">
                  <p
                    className="text-base font-normal text-left"
                    style={{ lineHeight: "18.38px" }}
                  >
                    Пополнить баланс
                  </p>
                  <GoPlus className="w-[20px] h-[20px]" />
                </button>
              </div>
            </div>
            <div className="w-full  bg-[#fff] rounded-[10px]">
              <div className="h-[58px] p-[20px] bg-[#fff] border-b border-gray-500">
                <h4 className="text-base font-medium leading-4 text-left">
                  История платежей
                </h4>
              </div>
              <div className="sm:flex gap-[10px]  px-[20px] grid">
                <div className="grid w-full">
                  <DemoItem label="От:">
                    <MobileDatePicker defaultValue={dayjs("Дата:")} />
                  </DemoItem>
                </div>
                <div className="grid w-full">
                  <DemoItem label="До:">
                    <MobileDatePicker defaultValue={dayjs("Дата:")} />
                  </DemoItem>
                </div>
              </div>
              <div className="p-[20px] mt-[20px] bg-[#fff]">
                <div className="grid gap-y-[10px]">
                  <h4 className="text-base font-medium leading-4 text-left">
                    Сегодня
                  </h4>
                  <div className="grid gap-y-[10px] ">
                    {[1, 2, 3].map((res, i) => (
                      <Acards />
                    ))}
                  </div>
                  <h4 className="text-base font-medium leading-4 text-left">
                    07.01.2024
                  </h4>
                  {[1, 2].map((res, i) => (
                    <Acards />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
