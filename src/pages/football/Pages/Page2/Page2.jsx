import * as React from "react";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePlusSm } from "react-icons/hi";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import s from "../../page.module.scss";
import Time from "../../../../components/Cards/time/Time";
import { AiOutlineClose } from "react-icons/ai";
import YandexMaps from "../../../../components/yandexMaps/yandexMaps";
import { BsToggle2Off } from "react-icons/bs";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Page2 = () => {
  //Дневная цена
  const [priceDay, setPriceDay] = useState();
  //Ночная цена
  const [priceNight, setPriceNight] = useState();
  //Локация
  const [location, setLocation] = useState();
  //Описание футбольного поля
  const [description, setDescription] = useState();
  //ФИО владельца
  const [administratorValue, setAdministratorValue] = useState();
  //ФИО администратора*
  const [administrator, setAdministrator] = useState();

  //  location   add
  const [mapLatLon, setMapLatLon] = useState();

  const [isModalMap, setIsModalMap] = useState(false);

  //График работы
  const [workScheduleList, setWorkScheduleList] = useState([
    {
      id: 6,
      day: "Суббота",
      startTime: "10:00 ",
      endTime: "19:00",
    },
    {
      id: 7,
      day: "Воскресенье",
      startTime: "10:00 ",
      endTime: "19:00",
    },
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImages1, setSelectedImages1] = useState([]);
  const [ModalsOpen, setModalsOpen] = useState(false);
  const handleFileChange1 = (e) => {
    const files = Array.from(e.target.files);

    const fileUrls = files?.map((file) => URL.createObjectURL(file));
    setSelectedImages1((prevImages) => [...prevImages, ...fileUrls]);
  };

  const dataListfootball = [
    {
      name: "Стадион",
      id: "1",
      isAcctive: true,
    },
    {
      name: "Мини поле",
      id: "2",
      isAcctive: false,
    },
    {
      name: "Площадка",
      id: "3",
      isAcctive: false,
    },
  ];
  const TypeList = [
    {
      name: "Стадион",
      id: "1",
      isAcctive: true,
    },
    {
      name: "Мини поле",
      id: "2",
      isAcctive: false,
    },
    {
      name: "Площадка",
      id: "3",
      isAcctive: false,
    },
  ];
  return (
    <>
      <div>
        <div className="mt-[100px] mx-[10px]">
          {isModalMap && (
            <div className={s.Map}>
              <div className={s.InfoTitel}>
                <p>Нужно выбрать местоположение</p>
                <div onClick={() => setIsModalMap(false)}>
                  <AiOutlineClose />
                </div>
              </div>
              <div className={s.YandexMapsStyle}>
                <YandexMaps setMapLatLon={setMapLatLon} />
              </div>
            </div>
          )}
          <div
            className={
              "mt-[50px] p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex justify-between  gap-[10px] "
            }
          >
            <div className="flex items-center gap-[10px] w-full lg:w-auto">
              {dataListfootball?.map((res) => (
                <button
                  className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
                >
                  {res.name}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <h4 className=" hidden lg:block text-left font-[400] text-[14px] ">
                Cкопировать детали предыдущих полей
              </h4>
              <FormControlLabel
                className="flex flex-row-reverse justify-between items-center"
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                onClick={() => setModalsOpen(true)}
              />
            </div>
          </div>
          <div className="xl:grid-cols-2 mt-[10px] grid grid-cols-[1fr] gap-x-[20px] xl:px-[5px] px-[5px]">
            <div className="rounded-[10px] h-min bg-[#ffffff]">
              <div className="w-full border-b border-solid border-gray-200 p-[20px]">
                <h4>Описание</h4>
              </div>
              <div className="p-[20px] grid gap-y-[20px]">
                <div className="grid gap-y-[8px] ">
                  <p>Тип поля</p>
                  <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] grid gap-[10px] ">
                    {TypeList?.map((res, i) => (
                      <button
                        key={i}
                        className="rounded-[4px] border border-solid border-gray-200 "
                      >
                        {res.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="lg:grid-cols-[1fr_1fr] gap-x-[10px] grid grid-cols-1">
                  <div className="w-full grid gap-y-[8px]">
                    <h5>Дневная цена</h5>
                    <div className="flex justify-between p-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                      <input
                        onChange={(e) => {
                          setPriceDay(e.target.value);
                        }}
                        value={priceDay}
                        className="bg-[#F0F0F0]"
                        type="number"
                        placeholder="Укажите цену"
                      />
                      <p className=" text-base font-normal leading-6 tracking-tight text-left">
                        Сом
                      </p>
                    </div>
                  </div>
                  <div className=" w-full grid gap-y-[8px]">
                    <h5>Ночная цена</h5>
                    <div className="flex justify-between px-[14px]  py-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                      <input
                        onChange={(e) => {
                          setPriceNight(e.target.value);
                        }}
                        value={priceNight}
                        className="bg-[#F0F0F0]"
                        type="number"
                        placeholder="Укажите цену"
                      />
                      <p className=" text-base font-normal leading-6 tracking-tight text-left">
                        Сом
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-[8px]">
                  <h5>Локация</h5>
                  <div
                    onClick={() => setIsModalMap(true)}
                    className="flex justify-between items-center px-[10px] py-[14px] rounded-[10px] bg-[#f0f0f0] border border-customColor"
                  >
                    <h5 className="font-size-[14px] font-normal leading-4 text-left text-[red]">
                      {mapLatLon != null ? mapLatLon : "Выберите локацию"}
                    </h5>
                    <CiLocationOn size={20} color="red" />
                  </div>
                </div>
                <div className="grid gap-y-[8px]">
                  <h5>Описание футбольного поля</h5>
                  <textarea
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                    className="rounded-[10px] p-[10px] bg-[#f0f0f0] outline-none focus:border-[2px] focus:border-green-500"
                    name=""
                    id=""
                    rows="5"
                    placeholder="Напишите сюда..."
                  ></textarea>
                </div>
              </div>
              <div className="grid ">
                <div className="p-[20px] border-b border-custom-border">
                  <h4 className="text-[16px] font-medium leading-5 text-left">
                    Контакты
                  </h4>
                </div>
                <div className="p-[20px] grid gap-y-[20px] ">
                  <div className="grid gap-y-[8px] ">
                    <p className="text-base font-normal leading-4 tracking-tight text-left">
                      ФИО владельца
                    </p>
                    <input
                      onChange={(e) => {
                        setAdministratorValue(e.target.value);
                      }}
                      value={administratorValue}
                      className="px-[10px] py-[14px] rounded-[10px] bg-[#f0f0f0]"
                      type="text"
                      placeholder="Укажите цену"
                    />
                  </div>
                  <div className="grid gap-y-[8px]">
                    <p className="text-base font-normal leading-4 tracking-tight text-left">
                      ФИО администратора*
                    </p>
                    <input
                      onChange={(e) => {
                        setAdministrator(e.target.value);
                      }}
                      value={administrator}
                      className="px-[10px] py-[14px] rounded-[10px] bg-[#f0f0f0]"
                      type="text"
                      placeholder="El-Clasico"
                    />
                  </div>
                  <div className="lg:grid-cols-[1fr_1fr] gap-[10px] grid grid-cols-1">
                    <div className="grid gap-y-[8px]">
                      <p className="text-base font-normal leading-4 text-left">
                        WhatsApp
                      </p>
                      <div className="flex item-center justify-between bg-[#f0f0f0] p-[10px] rounded-[10px]">
                        <input
                          className="bg-[#f0f0f0]"
                          type="nomer"
                          placeholder="+996 (000) 000 - 000"
                        />
                        <HiOutlinePlusSm size={25} />
                      </div>
                    </div>
                    <div className="grid gap-y-[8px]">
                      <p className="text-base font-normal leading-4 text-left">
                        WhatsApp
                      </p>
                      <div className="flex item-center justify-between bg-[#f0f0f0] p-[10px] rounded-[10px]">
                        <input
                          className="bg-[#f0f0f0]"
                          type="nomer"
                          placeholder="+996 (000) 000 - 000"
                        />
                        <HiOutlinePlusSm size={25} />
                      </div>
                    </div>
                    <div className="grid gap-y-[8px] ">
                      <p className="text-base font-normal leading-4 text-left">
                        WhatsApp
                      </p>
                      <div className="flex item-center justify-between bg-[#f0f0f0] p-[10px] rounded-[10px]">
                        <input
                          className="bg-[#f0f0f0]"
                          type="nomer"
                          placeholder="+996 (000) 000 - 000"
                        />
                        <HiOutlinePlusSm size={25} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-y-[40px] rounded-[10px]">
              <div className="grid bg-white  ">
                <div className="p-[20px] border-b border-gray-300">
                  <h4>График работы</h4>
                </div>
                <div className="p-[20px] grid gap-y-[8px] ">
                  {workScheduleList.map((item, i) => (
                    <div key={i}>
                      <Time res={item} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#fff] rounded-[10px]">
                <div className="p-[20px]  border-b border-gray-300">
                  <h4>Галерея</h4>
                </div>
                <div className="p-[20px]">
                  <div className="grid gap-[10px]">
                    <div className="w-full h-[140px] flex items-center justify-center bg-[#f0f0f0]">
                      <label htmlFor="upload" className="cursor-pointer">
                        <HiOutlinePlusSm size={30} />
                        <input
                          type="file"
                          id="upload"
                          multiple
                          className="hidden"
                          onChange={handleFileChange1}
                        />
                      </label>
                    </div>
                    {selectedImages1?.length > 0 ? (
                      <div className="grid  gap-[10px] grid-cols-3">
                        {selectedImages1?.map((imageURL, index) => (
                          <img
                            className="w-full h-200 object-cover"
                            key={index}
                            src={imageURL}
                            alt={`Uploaded image ${index + 1}`}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className=" sm:grid-cols-[1fr_2fr] grid grid-cols-1  gap-x-[10px]">
                        <div className="w-full h-[320px] bg-[#D9D9D9]"></div>
                        <div className="grid gap-y-[10px]">
                          <div className="w-full h-[130px] bg-[#D9D9D9]"></div>
                          <div className="flex gap-x-[10px] ">
                            <div className="w-full h-[180px] bg-[#D9D9D9]"></div>
                            <div className="w-full h-[180px] bg-[#D9D9D9]"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="items-center gap-y-[10px] md:gap-x-[10px] grid md:grid-cols-2 grid-cols-1  ">
                <button className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]">
                  Предыдущая
                </button>
                <button className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]">
                  Далее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ModalsOpen && (
        <div>
          <div
            onClick={() => setModalsOpen(false)}
            className="fixed top-0 left-0 shadow-md right-0 bottom-0 bg-[#e9e2e280]"
          ></div>
          <div className="w-[80%] fixed z-index-50 top-[50%] left-[50%] sm:w-[465px] h-[290px] bg-white rounded-[10px] translate-x-[-50%] translate-y-[-50%]">
            <div className=" py-[20px] grid gap-y-[12px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[999px] bg-[#F0F0F0] mx-auto">
                <BsToggle2Off size={25} />
              </div>
              <h4 className="font-inter text-2xl font-semibold leading-6 text-center mb-[10px]">
                Выберите поле для того чтобы скопировать данные
              </h4>
              <div className="h-[37px] flex items-center hover:bg-[#F6F6F6] mx-[20px] rounded-[5px]">
                <li className="list-none pl-[20px] text-[15px] font-normal text-[#5C5F6A] hover:text-[#0E1422]">
                  Мини поле
                </li>
              </div>
              <div className=" h-[37px] flex items-center hover:bg-[#F6F6F6] mx-[20px] rounded-[5px]">
                <li className="list-none pl-[20px] text-[15px] font-normal text-[#5C5F6A] hover:text-[#0E1422]">
                  Стандарт
                </li>
              </div>
              <div className=" h-[37px] flex items-center hover:bg-[#F6F6F6] mx-[20px] rounded-[5px]">
                <li className="list-none pl-[20px] text-[15px] font-normal text-[#5C5F6A] hover:text-[#0E1422]">
                  фут поля
                </li>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page2;
