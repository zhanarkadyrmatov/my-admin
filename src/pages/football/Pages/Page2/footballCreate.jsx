/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePlusSm } from "react-icons/hi";

import s from "../../page.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import YandexMaps from "../../../../components/yandexMaps/yandexMaps";
import { InputMask } from "@react-input/mask";
import ScheduleLIst from "../../../../components/FroomList/ScheduleLIst/ScheduleLIst";
import { useDispatch, useSelector } from "react-redux";
import { getBranchGetId, postCreacteFieldType } from "../../../../store/slice/create-foobol-slice";
import { useParams } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { useEffect } from "react";

const FootballCreate = () => {
  const { id } = useParams()
  const { advantages, fieldsIdInfo } =
    useSelector((state) => state.createFoobol);
  //Дневная цена

  const dispatch = useDispatch()

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
    setAdvantagesList(prevList => {
      if (isChecked) {
        if (!prevList.some(item => item.advantages === resId)) {
          return [...prevList, { advantages: resId, description: "" }];
        }
        return prevList;
      } else {
        return prevList.filter(item => item.advantages !== resId);
      }
    });
  };
  const updateDescription = (resId, newDescription) => {
    setAdvantagesList(prevList =>
      prevList.map(item =>
        item.advantages === resId ? { ...item, description: newDescription } : item
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
      workScheduleList,
      description,
      selectedImages1,
      mapLatLon
    }


    const formData = new FormData();

    formData.append("football_f", id);
    formData.append("description", description);
    formData.append("name", newName)
    selectedIamgeFile?.forEach((file) => {
      formData.append("images", file)
    })
    dispatch(postCreacteFieldType(formData))
    console.log(data, "test1");
  }

  useEffect(() => {
    dispatch(getBranchGetId(id))
  },
    [])

  console.log(fieldsIdInfo);
  const newFoobolField = () => {
    setMapLatLon([])
    setNewName("")
    setDescription("")
    setAdministratorValue("")
    setAdministrator("")
    setPriceDay("")
    setPriceNight("")
  }
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
        <div
          className={
            "mt-[50px] p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex lg:flex-row  gap-[10px] "
          }
        >
          <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full lg:w-auto">
            {fieldsIdInfo?.football_field_type?.map((res) => (
              <button
                className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
              >
                {res.name}
              </button>
            ))}
            <button onClick={() => newFoobolField()} className={`w-full h-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
            > <BiPlus /></button>
          </div>
        </div>
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
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    placeholder="Название"
                  />
                </div>
              </div>
              <div className="lg:grid-cols-[1fr_1fr] gap-x-[10px] grid grid-cols-1">
                <div className=" w-full grid gap-y-[8px]">
                  <h5>Дневная цена</h5>
                  <div className="flex justify-between p-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                    <input
                      onChange={(e) => {
                        setPriceDay(e.target.value);
                      }}
                      value={priceDay}
                      className="bg-[#F0F0F0] w-fufll"
                      style={{ width: '100% ', border: 'none', outline: 'none' }}
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
                      className="bg-[#F0F0F0] w-full"
                      style={{ width: '100% ', border: 'none', outline: 'none' }}
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
            <div className={`${s.checkboxList} `}
              style={{ padding: '20px !important' }}
            >
              {advantages?.map((res, i) => {
                const isChecked = advantagesList.some(item => item.advantages === res.id);
                const currentItem = advantagesList.find(item => item.advantages === res.id) || {};
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
                          onChange={(e) => updateDescription(res.id, e.target.value)}
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
              <ScheduleLIst />
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
                          <div className="w-full h-[180px] bg
                          -[#D9D9D9]"></div>
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
              <button onClick={() => handleGetInfo()} className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]">
                Далее
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FootballCreate;