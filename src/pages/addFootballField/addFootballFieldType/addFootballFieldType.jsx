import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdvantages,
  getBranchById,
  getConstructionType,
  getFieldsTypeName,
  postCreacteFieldType,
  setIsCreate,
} from "../../../store/slice/create-foobol-slice";
import { NavLink, useParams } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { useEffect } from "react";
import Loader from "../../../components/Loader/Loader";
import YandexMap from "../../../components/YandexMap/YandexMap";
import Select from "../../../components/Select/Select";
import ScheduleList from "../../../components/FroomList/ScheduleLIst/ScheduleLIst";
import Textarea from "../../../components/Textarea/Textarea";

const AddFootballFieldType = () => {
  const { id } = useParams();
  const {
    advantages,
    fieldsIdInfo,
    status,
    creacteFoobolStatus,
    construction,
    typeName,
  } = useSelector((state) => state.createFoobol);
  const dispatch = useDispatch();

  const [priceDay, setPriceDay] = useState({
    start_time: "",
    end_time: "",
    period_day: "day",
    price: 0,
  });
  const [priceNight, setPriceNight] = useState({
    start_time: "",
    end_time: "",
    period_day: "evening",
    price: 0,
  });
  const [location, setLocation] = useState();
  const [description, setDescription] = useState(null);
  const [administratorValue, setAdministratorValue] = useState();
  const [administrator, setAdministrator] = useState("");
  const [mapLatLon, setMapLatLon] = useState();
  const [isModalMap, setIsModalMap] = useState(false);
  const [schedule, setSchedule] = useState();
  const [advantagesList, setAdvantagesList] = useState([]);
  const [selectedImages1, setSelectedImages1] = useState([]);
  const [selectedIamgeFile, setSelectedImageFile] = useState([]);
  const [constructionListAcc, setConstructionListAcc] = useState([]);

  const handlerConstruction = (event) => {
    const newValue = event;
    if (!constructionListAcc?.includes(newValue)) {
      setConstructionListAcc([...constructionListAcc, newValue]);
    } else {
      setConstructionListAcc(
        constructionListAcc.filter((item) => item !== newValue)
      );
    }
  };
  const handleFileChange1 = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImageFile((img) => [...img, ...files]);
    const fileUrls = files?.map((file) => URL.createObjectURL(file));
    setSelectedImages1((prevImages) => [...prevImages, ...fileUrls]);
  };

  const [newName, setNewName] = useState(null);

  const handleAdvantages = (data, isChecked) => {
    const resId = data[1];
    setAdvantagesList((prevList) => {
      if (isChecked) {
        if (!prevList.some((item) => item.advantages === resId)) {
          return [...prevList, { advantages: resId, description: null }];
        }
        return prevList;
      } else {
        return prevList.filter((item) => item.advantages !== resId);
      }
    });
  };

  const updateDescription = (resId, newDescription) => {
    setAdvantagesList((prevList) =>
      prevList.map((item) =>
        item.advantages === resId
          ? { ...item, description: newDescription }
          : item
      )
    );
  };

  const handleGetInfo = () => {
    const data = {
      location,
      administrator,
      administratorValue,
      priceDay,
      priceNight,
      description,
      selectedImages1,
      mapLatLon,
    };

    const formData = new FormData();
    let dataPUT = [];
    formData.append("football_f", id);
    const price = [priceDay, priceNight];
    dataPUT["advantages"] = advantagesList;
    dataPUT["schedule"] = schedule;
    dataPUT["price"] = price;
    dataPUT["construction_type"] = constructionListAcc;
    formData.append("description", description);
    formData.append("name", newName);
    selectedIamgeFile?.forEach((file) => {
      formData.append("images", file);
    });
    const newData = [formData, dataPUT];
    dispatch(postCreacteFieldType(newData));
  };

  useEffect(() => {
    dispatch(getBranchById(id));
    dispatch(getAdvantages());
    dispatch(getConstructionType());
    dispatch(getFieldsTypeName());
  }, [dispatch, id]);

  const newFoobolField = () => {
    setMapLatLon([]);
    setDescription("");
    setAdministratorValue("");
    setAdministrator("");
    setPriceDay("");
    setPriceNight("");
    setConstructionListAcc([]);
    setSelectedImageFile([]);
    setSelectedImages1([]);
    setIsModalMap(false);
  };

  useEffect(() => {
    setNewName(typeName && typeName[0]);
  }, [typeName]);

  useEffect(() => {
    if (creacteFoobolStatus === "fulfilled") {
      newFoobolField();
      dispatch(getBranchById(id));
      dispatch(getAdvantages());
      dispatch(getConstructionType());
    }
  }, [creacteFoobolStatus, dispatch, id]);

  if (creacteFoobolStatus === "loading") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="mx-[20px] mt-[90px] mb-7">
      <div>
        {isModalMap && (
          <YandexMap
            setMapLatLon={setMapLatLon}
            mapLatLon={mapLatLon}
            setIsModalMap={setIsModalMap}
          />
        )}
        <div
          className={
            "mt-[50px] p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex  gap-[10px] justify-between items-center"
          }
        >
          <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full lg:w-auto">
            {fieldsIdInfo?.football_field_type?.map((res) => (
              <button
                className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:bg-[#1C1C1C] hover:text-[#fff] hover:shadow-md duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] `}
              >
                {res?.name}
              </button>
            ))}
            <button
              onClick={() => newFoobolField()}
              className={`px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:bg-[#1C1C1C] hover:text-[#fff] duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
            >
              <BiPlus className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-[10px]">
            <p className="text-[14px] text-[#1C1C1C] font-normal leading-normal">
              Cкопировать детали предыдущих полей
            </p>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" name="checkbox" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-[#78788029] rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
        <div className="xl:grid-cols-2 mt-[10px] grid grid-cols-1 gap-[20px] xl:px-[5px] px-[5px]">
          <div className="rounded-[10px] h-min bg-[#ffffff]">
            <div className="w-full border-b border-solid border-gray-200 p-[20px]">
              <h4 className="text-[16px] text-[#1C1C1C] font-normal leading-[18px]">
                Описание
              </h4>
            </div>
            <div className="p-[20px] flex flex-col gap-y-[20px]">
              <Select setName={setNewName} name={newName} />
              <div className="lg:grid-cols-[1fr_1fr] gap-x-[10px] grid grid-cols-1">
                <div className=" w-full grid gap-y-[8px]">
                  <p className="text-[14px] text-[#1C1C1C] font-normal leading-normal">
                    Дневная цена
                  </p>
                  <div
                    className="flex justify-between p-[10px] border-[2px]
                    border-[#1C1C1C0D] bg-[#F0F0F0] rounded-[8px] focus-within:border-[green] focus-within:border-[2px]"
                  >
                    <input
                      onChange={(e) => {
                        setPriceDay((prevPriceDay) => ({
                          ...prevPriceDay,
                          price: e.target.value,
                          period_day: "day",
                        }));
                      }}
                      className="bg-transparent w-full outline-none rounded-none"
                      type="number"
                      placeholder="Укажите цену"
                    />
                    <p className=" text-base font-normal leading-6 tracking-tight text-left">
                      Сом
                    </p>
                  </div>
                  <div className="flex justify-between p-[10px] gap-5 bg-[#F0F0F0] border-[2px] border-[#1C1C1C0D] rounded-[8px] focus-within:border-[green] focus-within:border-[2px]">
                    <input
                      onChange={(e) => {
                        setPriceDay((prevPriceDay) => ({
                          ...prevPriceDay,
                          start_time: e.target.value,
                        }));
                      }}
                      className="bg-transparent w-full outline-none rounded-none"
                      type="time"
                      placeholder="Укажите цену"
                    />
                    <input
                      onChange={(e) => {
                        setPriceDay((prevPriceDay) => ({
                          ...prevPriceDay,
                          end_time: e.target.value,
                        }));
                      }}
                      className="bg-transparent w-full outline-none rounded-none"
                      type="time"
                      placeholder="Укажите цену"
                    />
                  </div>
                </div>
                <div className=" w-full grid gap-y-[8px]">
                  <p className="text-[14px] text-[#1C1C1C] font-normal leading-normal">
                    Ночная цена
                  </p>
                  <div className="flex justify-between px-[14px] border-[2px] border-[#1C1C1C0D]  py-[10px] bg-[#F0F0F0]  rounded-[8px] focus-within:border-[2px] focus-within:border-[green]">
                    <input
                      onChange={(e) => {
                        setPriceNight((prevPriceNight) => ({
                          ...prevPriceNight,
                          price: e.target.value,
                          period_day: "evening",
                        }));
                      }}
                      className="bg-transparent w-full outline-none rounded-none "
                      type="number"
                      placeholder="Укажите цену"
                    />
                    <p className=" text-base font-normal leading-6 tracking-tight text-left">
                      Сом
                    </p>
                  </div>
                  <div className="flex justify-between p-[10px] gap-5 bg-[#F0F0F0] border-[2px] border-[#1C1C1C0D] rounded-[8px] focus-within:border-[green] focus-within:border-[2px]">
                    <input
                      onChange={(e) => {
                        setPriceNight((prevPriceNight) => ({
                          ...prevPriceNight,
                          start_time: e.target.value,
                        }));
                      }}
                      className="bg-transparent w-full outline-none rounded-none"
                      type="time"
                      placeholder="Укажите цену"
                    />
                    <input
                      onChange={(e) => {
                        setPriceNight((prevPriceNight) => ({
                          ...prevPriceNight,
                          end_time: e.target.value,
                        }));
                      }}
                      className="bg-transparent w-full  outline-none rounded-none"
                      type="time"
                      placeholder="Укажите цену"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[14px] text-[#1C1C1C] font-normal leading-normal">
                  Тип поля
                </p>
                <div className={"flex gap-[10px] flex-wrap"}>
                  {construction?.results?.map((res, i) => {
                    const isAcc = constructionListAcc?.some(
                      (el) => el.name === res.name
                    );
                    return (
                      <div
                        onClick={() => handlerConstruction(res)}
                        key={i}
                        className={`border-[2px] py-[6px] px-[10px] rounded-[4px] cursor-pointer text-[15px] text-[#222222] font-normal leading-[17.24px] text-left ${
                          isAcc ? "border-[#222222]" : "border-[#2222221a]"
                        }`}
                      >
                        {res.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Textarea
                label="Описание футбольного поля"
                value={description}
                onchange={setDescription}
                placeholder={"Напишите сюда..."}
              />
            </div>
            <div className="w-full border-b border-solid border-gray-200 p-[20px]">
              <h4 className="text-[16px] text-[#1C1C1C] font-normal leading-[18px]">
                Преимущества
              </h4>
            </div>
            <div className={"flex flex-col gap-[10px] p-[20px]"}>
              {advantages?.map((res, i) => {
                const isChecked = advantagesList.some(
                  (item) => item.advantages === res.id
                );
                const currentItem =
                  advantagesList.find((item) => item.advantages === res.id) ||
                  {};
                return (
                  <div className={"flex gap-[5px] flex-col"} key={i}>
                    <div className="flex gap-[5px] w-full flex-col">
                      <div className="flex items-center gap-[10px] w-full">
                        <input
                          onChange={(e) => {
                            const data = [e.target.name, res.id];
                            handleAdvantages(data, e.target.checked);
                          }}
                          name={res.id}
                          type="checkbox"
                          className="w-[22px] h-[22px] border-[1px] border-[#2222221A] rounded-[4px]"
                        />
                        <label className="text-[15px] leading-[17px] text-[#222222] font-normal">
                          {res?.name}
                        </label>
                      </div>
                    </div>
                    {isChecked && (
                      <div className={"flex gap-[10px]"}>
                        <input
                          className="w-full text-[14px] leading-[17px] text-[#222222] font-normal outline-none border-b-[1px] border-[#1c1c1c1a] pb-[5px]"
                          type="text"
                          placeholder="Добавить описание"
                          value={currentItem.description || ""}
                          onChange={(e) =>
                            updateDescription(res.id, e.target.value)
                          }
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid gap-y-[20px] lg:gap-y-[40px] rounded-[10px]">
            <div className="grid bg-white  rounded-[10px] ">
              <div className="p-[20px] border-b border-gray-300">
                <h4 className="text-[16px] text-[#1C1C1C] font-normal leading-[18px]">
                  График работы
                </h4>
              </div>
              <ScheduleList setSchedule={setSchedule} />
            </div>
            <div className=" bg-[#fff] rounded-[10px]">
              <div className="p-[20px]  border-b border-gray-300">
                <h4 className="text-[16px] text-[#1C1C1C] font-normal leading-[18px]">
                  Галерея
                </h4>
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
                        accept="image/*"
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
                          <div
                            className="w-full h-[180px] bg
                          -[#D9D9D9]"
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="items-center gap-y-[10px] md:gap-x-[10px] grid md:grid-cols-2 grid-cols-1  ">
              <button
                onClick={() => handleGetInfo()}
                className={`w-full p-[8px] rounded-[8px]  bg-[#475ede] text-[#fff] text-base font-medium leading-5 text-center ${
                  newName && description
                    ? "shadow-md opacity-100 сursor-pointer"
                    : "shadow-none opacity-50"
                }`}
              >
                Сохранить и создать поле
              </button>
              <NavLink
                to={`/fields/${id}`}
                onClick={() => {
                  if (newName && description) {
                    handleGetInfo();
                    dispatch(setIsCreate(null));
                  } else {
                    dispatch(setIsCreate(null));
                  }
                }}
                className={`w-full p-[8px] rounded-[8px] bg-[#0A9829]  duration-300 hover:shadow-md text-base font-medium leading-5 text-center text-[#fff] сursor-pointer`}
              >
                Сохранить
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFootballFieldType;
