import { useState, useEffect } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import img7 from "../../img/img7.svg";
import Time from "../../components/Cards/time/Time";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePlusSm } from "react-icons/hi";
import s from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import {
  getAdvantages,
  postAdvantages,
} from "../../store/slice/create-foobol-slice";

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
export default function Addfootball() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [page, setPage] = useState("home");
  const dispatch = useDispatch();
  const { advantages, status } = useSelector((state) => state.createFoobol);
  const [advantagesValue, setAdvantagesValue] = useState([]);
  const [newName, setNewName] = useState();
  const [addFootballTypes, setAddFootballTypes] = useState("Мини поле1");
  const [addFootballTypesList, setAddFootballTypesList] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  useEffect(() => {
    dispatch(getAdvantages());
  }, []);

  console.log(advantages, "advantages");
  const getAdvantagesId = (e) => {
    setAdvantagesValue((advantages) => [...advantages, e]);
    alert(JSON.stringify(advantagesValue));
  };

  const handleAddFootballTypes = (e) => {
    setAddFootballTypesList([...addFootballTypesList, addFootballTypes]);
  };
  const [selectBranchTypeList, setSelectBranchTypeList] = useState([
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
  ]);
  const goToPage = (pageName) => {
    setPage(pageName);
  };

  const handleRadioChange = (e, res) => {
    setSelectedValue(res.name);
  };

  // {advantages?.map((res, i) => {
  //   return (
  //     <div className={s.checkbox}>
  //       <input
  //         onChange={(e) => getAdvantagesId(res.id)}
  //         type="checkbox"
  //         className="w-[24px] h-[24px] border-[1px] border-[#2222221A] rounded-[4px]"
  //       />
  //       <div className="flex flex-col gap-0 w-full">
  //         <label
  //           className="text-[15px] leading-[17px] text-[#222222] font-normal"
  //           htmlFor=""
  //         >
  //           {res?.name}
  //         </label>
  //         <p>{res?.description}</p>
  //       </div>
  //     </div>
  //   )
  // })}
  return (
    <>
      {page === "home" && (
        <div className="mt-[50px]">
          <div className=" grid-cols-[1fr] grid xl:grid-cols-[1fr_2fr] md: gap-[20px] ">
            <div className="h-min w-full rounded-[10px] bg-white">
              <div className="p-[20px] border-b border-solid border-opacity-10 border-black">
                <h4>Преимущества</h4>
              </div>
              <div className={s.checkboxList}></div>
            </div>
            <div className="bg-[#fff]">
              <div className="p-[20px] rounded-t-[10px] bg-white border-b-[1px] border-[#E8E8E8]">
                <h4 className="text-[16px] font-normal leading-[18px] text-[#222]">
                  Информация
                </h4>
              </div>
              <div className="p-[20px] grid gap-y-[20px]">
                <div className="bg-white">
                  <div className="sm:grid-cols-3  grid gap-x-[10px] mb-[20px] grid-cols-1 ">
                    <div className="flex flex-col gap-y-[10px] items-center">
                      <div
                        style={{
                          backgroundImage: `url(${img7})`,
                        }}
                        className="w-full h-[150px] bg-center bg-no-repeat bg-cover flex justify-center items-center  bg-gray-100 rounded shadow-md"
                      ></div>
                      <p className="text-center font-medium text-[13px] leading-4 text-[#222222]">
                        По умолчанию
                      </p>
                    </div>
                    <div className="grid justify-items-center gap-y-[10px]">
                      <div className="w-full h-[150px]  flex flex-col items-center justify-center bg-gray-100 rounded shadow-md">
                        <label htmlFor="upload" className="cursor-pointer">
                          <BiSolidCameraPlus size={30} />
                          <input
                            type="file"
                            id="upload"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                      <p className="text-center font-medium text-[13px] leading-4 text-[#222222]">
                        Коснитесь, чтобы загрузить фото обложку
                      </p>
                    </div>
                    <div className="grid justify-items-center gap-y-[10px]">
                      <div className="w-full h-[150px]  flex flex-col items-center justify-center bg-gray-100 rounded shadow-md">
                        <label htmlFor="upload" className="cursor-pointer">
                          <BiSolidCameraPlus size={30} />
                          <input
                            type="file"
                            id="upload"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                      <p className="text-center font-medium text-[13px] leading-4 text-[#222222]">
                        Коснитесь, чтобы загрузить фото карточки
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-[8px]">
                  <h4 className="text-base font-normal leading-normal text-left">
                    Название футбольного поля
                  </h4>
                  <div>
                    <input
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[10px] w-full focus:outline-none foc us:shadow-outline"
                      type="text"
                      placeholder="El-Clasico"
                    />
                  </div>
                </div>
                <div className="grid gap-y-[8px] ">
                  <h4>Выберите тип филиала</h4>
                  <div className="sm:grid-cols-2 grid gap-[10px] grid-cols-1">
                    {selectBranchTypeList?.map((res, i) => (
                      <button
                        key={i}
                        className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] flex justify-between items-center "
                      >
                        <h4 className="text-base font-normal leading-6 tracking-tight text-left">
                          {res?.name}
                        </h4>
                        <input
                          onChange={(e) => handleRadioChange(e, res)}
                          name="myRadio"
                          type="radio"
                          className="w-[18px] h-[18px]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-y-[8px]">
                  <h4>Добавьте типы футбольных полей</h4>
                </div>
                <div className="grid gap-[5px]">
                  <div className="w-full bg-[#F0F0F0] py-[5px] px-[5px] rounded-[8px] flex justify-between items-center ">
                    <select
                      className="w-[fill] h-[40px] bg-[#F0F0F0] py-[5px] px-[5px] rounded-[8px] flex justify-between items-center "
                      value={addFootballTypes}
                      onChange={(e) => setAddFootballTypes(e.target.value)}
                    >
                      <option value="Мини поле1">Мини поле1</option>
                      <option value="Мини поле 2">Мини поле 2</option>
                      <option value="Фут-Зал">Фут-Зал</option>
                    </select>
                    <div className="flex gap-[10px] items-center">
                      <MdKeyboardArrowDown size={25} />
                      <button
                        onClick={() =>
                          setAddFootballTypesList([
                            ...addFootballTypesList,
                            addFootballTypes,
                          ])
                        }
                        className="p-[8px] rounded-lg bg-blue-500 text-white"
                      >
                        Добавить
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[10px] items-center flex-wrap">
                  {addFootballTypesList?.map((item, index) => (
                    <button className="px-[10px] py-[6px] rounded-[6px] border border-solid border-gray-300 text-base font-normal leading-5 text-left">
                      {item}
                    </button>
                  ))}
                </div>
                <div
                  onClick={() => goToPage("about")}
                  className="p-[8px] rounded-[8px] bg-[#7384E8]"
                >
                  <p className="text-base font-medium leading-5 text-center text-[#fff]">
                    Далее
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === "about" && (
        <div>
          <div
            className={
              "mt-[50px] p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex lg:flex-row  gap-[10px] justify-between items-center"
            }
          >
            <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full lg:w-auto">
              <button
                className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
              >
                Мини поле
              </button>
              <button
                className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
              >
                Стандарт
              </button>
              <button
                className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
              >
                Фут-Зал
              </button>
              <button
                className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
              >
                Описание
              </button>
            </div>
            <div>
              <FormControlLabel
                className="flex flex-row-reverse justify-between items-center"
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Cкопировать детали предыдущих полей"
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
                    <button className="rounded-[4px] border border-solid border-gray-200 ">
                      Крытое поле
                    </button>
                    <button className="rounded-[4px] border border-solid border-gray-200 ">
                      Крытое поле
                    </button>
                    <button className="rounded-[4px] border border-solid border-gray-200 ">
                      Крытое поле
                    </button>
                    <button className="rounded-[4px] border border-solid border-gray-200 ">
                      Крытое поле
                    </button>
                    <button className="rounded-[4px] border border-solid border-gray-200 ">
                      <p>Крытое поле</p>
                    </button>
                  </div>
                </div>
                <div className="lg:grid-cols-[1fr_1fr] gap-x-[10px] grid grid-cols-1">
                  <div className=" w-full grid gap-y-[8px]">
                    <h5>Дневная цена</h5>
                    <div className="flex justify-between p-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                      <input
                        className="bg-[#F0F0F0]"
                        type="text"
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
                        className="bg-[#F0F0F0]"
                        type="text"
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
                  <div className="flex justify-between items-center px-[10px] py-[14px] rounded-[10px] bg-[#f0f0f0] border border-customColor">
                    <h5 className="font-size-[14px] font-normal leading-4 text-left text-[red]">
                      Добавить локацию
                    </h5>
                    <CiLocationOn size={20} color="red" />
                  </div>
                </div>
                <div className="grid gap-y-[8px]">
                  <h5>Описание футбольного поля</h5>
                  <textarea
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
                  <Time />
                  <Time />
                  <Time />
                  <Time />
                  <Time />
                  <Time />
                  <Time />
                </div>
              </div>
              <div className=" bg-[#fff] rounded-[10px]">
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
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
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
      )}
    </>
  );
}
