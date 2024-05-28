import * as React from "react";
import Acards from "../../components/Cards/arbitrCards/Acards";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
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
