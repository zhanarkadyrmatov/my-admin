import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePlusSm } from "react-icons/hi";

import s from "./page.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { useEffect } from "react";
import {
  getAdvantages,
  getBranchGetId,
  getConstructionType,
  postCreacteFieldType,
} from "../../../store/slice/create-foobol-slice";
import YandexMaps from "../../../components/yandexMaps/yandexMaps";
import ScheduleList from "../../../components/FroomList/ScheduleLIst/ScheduleLIst";
import cm from "classnames";
import { fetchFieldsIdList } from "../../../store/slice/fields-slice";

const EditFieds = () => {
  const { id } = useParams();
  const {
    advantages,
    fieldsIdInfo,
    status,
    creacteFoobolStatus,
    construction,
  } = useSelector((state) => state.createFoobol);

  const { fieldsIdDetail } = useSelector((state) => state.fields);
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

  //Дневная цена

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranchGetId(id));
    dispatch(getAdvantages());

    dispatch(getConstructionType());
    dispatch(fetchFieldsIdList(id));
  }, []);

  const [priceDay, setPriceDay] = useState({
    start_time: "",
    end_time: "",
    period_day: "day",
    price: 0,
  });
  //Ночная цена
  const [priceNight, setPriceNight] = useState({
    start_time: "",
    end_time: "",
    period_day: "evening",
    price: 0,
  });
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
  const [schedule, setSchedule] = useState();
  //Преимущества
  const [advantagesList, setAdvantagesList] = useState([]);

  const [selectedImages1, setSelectedImages1] = useState([]);

  const [selectedIamgeFile, setSelectedImageFile] = useState(null);
  const handleFileChange1 = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImageFile(files);
    const fileUrls = files?.map((file) => URL.createObjectURL(file));
    setSelectedImages1((prevImages) => [...prevImages, ...fileUrls]);
  };

  const [newName, setNewName] = useState();

  const handleAdvantages = (data, isChecked) => {
    const resId = data[1];
    setAdvantagesList((prevList) => {
      if (isChecked) {
        if (!prevList.some((item) => item.advantages === resId)) {
          return [...prevList, { advantages: resId, description: "" }];
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
    // advantagesList, [(priceDay, priceNight)]
    formData.append("football_f", id);
    const schedule = [priceDay, priceNight];
    dataPUT["advantages"] = advantagesList;
    dataPUT["schedule"] = schedule;
    formData.append("description", description);
    formData.append("name", newName);
    selectedIamgeFile?.forEach((file) => {
      formData.append("images", file);
    });

    const newData = [formData, dataPUT];
    dispatch(postCreacteFieldType(newData));
  };

  const newFoobolField = () => {
    setMapLatLon([]);
    setNewName("");
    setDescription("");
    setAdministratorValue("");
    setAdministrator("");
    setPriceDay("");
    setPriceNight("");
  };
  useEffect(() => {
    setNewName(fieldsIdDetail?.name);
    setDescription(fieldsIdDetail?.description);
    setAdministratorValue(fieldsIdDetail?.administratorValue);
    setAdministrator(fieldsIdDetail?.administrator);
    setPriceDay(fieldsIdDetail?.schedule[0]);
    setPriceNight(fieldsIdDetail?.schedule[1]);
    setMapLatLon(fieldsIdDetail?.location);
    setPriceDay({
      start_time: fieldsIdDetail?.price[0].start_time,
      end_time: fieldsIdDetail?.price[0].end_time,
      period_day: "day",
      price: fieldsIdDetail?.price[0].price,
    });
    setPriceNight({
      start_time: fieldsIdDetail?.price[1].start_time,
      end_time: fieldsIdDetail?.price[1].end_time,
      period_day: "evening",
      price: fieldsIdDetail?.price[1].price,
    });
    const imageUrls = fieldsIdDetail?.gallery_f_type.map((item) => item.img);
    setSelectedImages1(imageUrls);
    setConstructionListAcc(fieldsIdDetail?.construction_type);
  }, [fieldsIdDetail]);
  if (creacteFoobolStatus === "loading") {
    return <div>Loading...</div>;
  }
  console.log(fieldsIdDetail, "fieldsIdDetail");
  return (
    <div className="mx-[20px] mt-[90px]">
      <div>
        {isModalMap && (
          <div className={s.Map}>
            <div className={s.InfoTitel}>
              <p>Нужно выбрать местоположение</p>
              <div onClick={() => setIsModalMap(false)}>
                <AiOutlineClose />
              </div>
            </div>
            <div className={s.YandexMapsStyle}>
              <YandexMaps setMapLatLon={setMapLatLon} mapLatLon={mapLatLon} />
            </div>
          </div>
        )}

        <div className="xl:grid-cols-2 mt-[10px] grid grid-cols-[1fr] gap-x-[20px] xl:px-[5px] px-[5px]">
          <div className="rounded-[10px] h-min bg-[#ffffff]">
            <div className="w-full border-b border-solid border-gray-200 p-[20px]">
              <h4>Описание</h4>
            </div>
            <div className="p-[20px] grid gap-y-[20px]">
              <div className="grid gap-y-[8px] ">
                <p>Название </p>
                <div className="flex justify-between p-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                  <input
                    onChange={(e) => setNewName(e.target.value)}
                    value={newName}
                    className="bg-[#F0F0F0] w-fill"
                    style={{ width: "100%", border: "none", outline: "none" }}
                    placeholder="Название"
                  />
                </div>
              </div>
              <div className="grid gap-y-[8px]">
                <h5>Тип поля</h5>
                <div className={s.constructionList}>
                  {construction?.map((res, i) => {
                    const isAcc = constructionListAcc?.find(
                      (el) => el.name === res.name
                    );
                    return (
                      <div
                        onClick={() => handlerConstruction(res)}
                        key={i}
                        className={cm(s.construction, {
                          [s.activeIsAcc]: !!isAcc,
                        })}
                      >
                        {res.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="lg:grid-cols-[1fr_1fr] gap-x-[10px] grid grid-cols-1">
                <div className=" w-full grid gap-y-[8px]">
                  <h5>Дневная цена</h5>
                  <div className="flex justify-between p-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                    <input
                      onChange={(e) => {
                        setPriceDay((prevPriceDay) => ({
                          ...prevPriceDay,
                          price: e.target.value,
                        }));
                      }}
                      value={priceDay.price}
                      className="bg-[#F0F0F0] w-fufll"
                      style={{
                        width: "100% ",
                        border: "none",
                        outline: "none",
                      }}
                      type="number"
                      placeholder="Укажите цену"
                    />
                    <p className=" text-base font-normal leading-6 tracking-tight text-left">
                      Сом
                    </p>
                  </div>
                  <div className="flex justify-between p-[10px] gap-5 bg-[#F0F0F0] border border-customColor rounded-[10px]">
                    <input
                      onChange={(e) => {
                        setPriceDay((prevPriceDay) => ({
                          ...prevPriceDay,
                          start_time: e.target.value,
                        }));
                      }}
                      value={priceDay.start_time}
                      style={{
                        width: "100% ",
                        border: "none",
                        outline: "none",

                        backgroundColor: "transparent",
                      }}
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
                      value={priceDay.end_time}
                      style={{
                        width: "100% ",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      type="time"
                      placeholder="Укажите цену"
                    />
                  </div>
                </div>
                <div className=" w-full grid gap-y-[8px]">
                  <h5>Ночная цена</h5>
                  <div className="flex justify-between px-[14px]  py-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                    <input
                      onChange={(e) => {
                        setPriceNight((prevPriceNight) => ({
                          ...prevPriceNight,
                          price: e.target.value,
                        }));
                      }}
                      className="bg-[#F0F0F0] w-full"
                      style={{
                        width: "100% ",
                        border: "none",
                        outline: "none",
                      }}
                      type="number"
                      value={priceNight.price}
                      placeholder="Укажите цену"
                    />
                    <p className=" text-base font-normal leading-6 tracking-tight text-left">
                      Сом
                    </p>
                  </div>

                  <div className="flex justify-between p-[10px] gap-5 bg-[#F0F0F0] border border-customColor rounded-[10px]">
                    <input
                      onChange={(e) => {
                        setPriceNight((prevPriceNight) => ({
                          ...prevPriceNight,
                          start_time: e.target.value,
                        }));
                      }}
                      value={priceNight.start_time}
                      style={{
                        width: "100% ",
                        border: "none",
                        outline: "none",
                        backgroundColor: "transparent",
                      }}
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
                      value={priceNight.end_time}
                      style={{
                        width: "100% ",

                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      type="time"
                      placeholder="Укажите цену"
                    />
                  </div>
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
            <div className="w-full border-b border-solid border-gray-200 p-[20px]">
              <h4>Преимущества</h4>
            </div>
            <div
              className={`${s.checkboxList} `}
              style={{ padding: "20px !important" }}
            >
              {advantages?.map((res, i) => {
                const isChecked = advantagesList.some(
                  (item) => item.advantages === res.id
                );
                const currentItem =
                  advantagesList.find((item) => item.advantages === res.id) ||
                  {};
                return (
                  <div className={s.checkbox} key={i}>
                    <div className="flex gap-[5px] w-full flex-col">
                      <div className="flex gap-[10px] w-full">
                        <input
                          onChange={(e) => {
                            const data = [e.target.name, res.id];
                            handleAdvantages(data, e.target.checked); // Pass checked state
                          }}
                          name={res.id}
                          type="checkbox"
                          className="w-[24px] h-[24px] border-[1px] border-[#2222221A] rounded-[4px]"
                        />
                        <label className="text-[15px] leading-[17px] text-[#222222] font-normal">
                          {res?.name}
                        </label>
                      </div>
                    </div>
                    {isChecked && (
                      <div className={s.checkboxInput}>
                        <input
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
          <div className="grid gap-y-[40px] rounded-[10px]">
            <div className="grid bg-white  ">
              <div className="p-[20px] border-b border-gray-300">
                <h4>График работы</h4>
              </div>
              <ScheduleList setSchedule={setSchedule} />
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
              <button className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]">
                Предыдущая
              </button>
              <button
                onClick={() => handleGetInfo()}
                className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]"
              >
                Далее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFieds;