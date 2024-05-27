import React, { useState, useEffect } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";
import img7 from "../../img/img7.svg";
import s from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdvantages,
  getLocationsCities,
  postAdvantages,
} from "../../store/slice/create-foobol-slice";
import YandexMaps from "../../components/yandexMaps/yandexMaps";
import { AiOutlineClose } from "react-icons/ai";
import Page2 from "./Pages/Page2/Page2";
export default function Addfootball() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [page, setPage] = useState("about");
  const dispatch = useDispatch();
  const { advantages, locationsCities, creacteFoobolStatus, status } =
    useSelector((state) => state.createFoobol);
  const [advantagesValue, setAdvantagesValue] = useState([]);
  const [newName, setNewName] = useState();
  const [addFootballTypes, setAddFootballTypes] = useState("Мини поле1");
  const [addFootballTypesList, setAddFootballTypesList] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [locationsCitiesValue, setLocationsCitiesValue] = useState(null);
  const [address, setAddress] = useState(null);
  const [district, setDistrict] = useState(null);
  const [isModalMap, setIsModalMap] = useState(false);
  const [description, setDescription] = useState();

  const [mapLatLon, setMapLatLon] = useState();
  useEffect(() => {
    dispatch(getAdvantages());
    dispatch(getLocationsCities());
  }, []);

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

  const [administratorList, setAdministratorList] = useState([
    { name: "Erik", id: 1, type: "Менеджер " },
    { name: "john", id: 2, type: "Админ" },
    { name: "alex", id: 3, type: "Админ" },
    { name: "jane", id: 4, type: "Техник" },
    { name: "jane", id: 5, type: "Админ" },
  ]);

  const [administratorValue, setAdministratorValue] = useState(null);
  const handlerPostCreacteFoobolField = () => {
    const data = {
      name: newName,
      advantages: advantagesValue,
      description: description,
      administrator: administratorValue,
      address: address,
      city: locationsCitiesValue,
      district: district,

      latitude: mapLatLon?.lat,
      longitude: mapLatLon?.lon,
    };
    console.log(data, "test1");
  };
  const goToPage = (pageName) => {
    setPage(pageName);

    handlerPostCreacteFoobolField();
  };
  const handleRadioChange = (e, res) => {
    setSelectedValue(res.name);
  };

  return (
    <>
      {page === "home" && (
        <div className="mt-[50px]">
          <div className=" grid-cols-[1fr] grid xl:grid-cols-[1fr_2fr] md: gap-[20px] ">
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
            <div className="h-min w-full rounded-[10px] bg-white">
              <div className="p-[20px] border-b border-solid border-opacity-10 border-black">
                <h4>Преимущества</h4>
              </div>
              <div className={s.checkboxList}>
                {advantages?.map((res, i) => {
                  let isAcc = true;
                  const handleCheckboxChange = (event) => {
                    if (event.target.checked) {
                      isAcc = true;
                    } else {
                      isAcc = false;
                    }
                  };
                  return (
                    <div className={s.checkbox} key={i}>
                      <div className="flex gap-[5px] w-full flex-col">
                        <div className="flex gap-[10px] w-full">
                          <input
                            onChange={(event) => handleCheckboxChange(event)}
                            name={res.id}
                            type="checkbox"
                            className="w-[24px] h-[24px] border-[1px] border-[#2222221A] rounded-[4px]"
                          />
                          <label className="text-[15px] leading-[17px] text-[#222222] font-normal">
                            {res?.name}
                          </label>
                        </div>
                        {isAcc === true &&
                          res?.specific_advantages.map((ress) => (
                            <div className={s.checkboxType} key={ress.id}>
                              <input
                                onChange={(event) =>
                                  handleRadioChange(event, res)
                                }
                                name={res.id}
                                type="radio"
                              />
                              {ress?.type.name}
                            </div>
                          ))}
                      </div>
                    </div>
                  );
                })}
              </div>
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
                          backgroundImage: `url(${
                            selectedImage != null ? selectedImage : img7
                          })`,
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
                <div className="grid gap-y-[8px]">
                  <h4 className="text-base font-normal leading-normal text-left">
                    Адрес
                  </h4>
                  <div>
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[10px] w-full focus:outline-none foc us:shadow-outline"
                      type="text"
                      placeholder="г. Москва, ул. Пушкина, д. 17"
                    />
                  </div>
                </div>
                <div className="grid gap-y-[8px]">
                  <h4 className="text-base font-normal leading-normal text-left">
                    Выбрать кординаты на карте
                  </h4>
                  <div>
                    <input
                      value={mapLatLon}
                      onClick={(e) => setIsModalMap(!isModalMap)}
                      className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[10px] w-full focus:outline-none foc us:shadow-outline"
                      type="text"
                      placeholder="42.9797372189141,74.35650861718749"
                    />
                  </div>
                </div>
                <div className="grid gap-y-[8px]">
                  <h4 className="text-base font-normal leading-normal text-left">
                    Округ
                  </h4>
                  <div>
                    <input
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[10px] w-full focus:outline-none foc us:shadow-outline"
                      type="text"
                      placeholder="Округ 1"
                    />
                  </div>
                </div>
                <div className="grid gap-y-[8px] ">
                  <h4>Выберите тип</h4>
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
                <div className="grid gap-y-[8px] ">
                  <h4>Выберите город </h4>
                  <div className="sm:grid-cols-2 grid gap-[10px] grid-cols-1">
                    {locationsCities?.map((res, i) => (
                      <button
                        key={i}
                        className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] flex justify-between items-center "
                      >
                        <h4 className="text-base font-normal leading-6 tracking-tight text-left">
                          {res?.name.ru}
                        </h4>
                        <input
                          onChange={(e) => setLocationsCitiesValue(res.slug)}
                          name="locationsCities"
                          type="radio"
                          className="w-[18px] h-[18px]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-y-[8px] ">
                  <h4>Администратор Футбольного комплекса </h4>
                  <div className="sm:grid-cols-2 grid gap-[10px] grid-cols-1">
                    {administratorList?.map((res, i) => (
                      <button
                        key={i}
                        className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] flex justify-between items-center "
                      >
                        <h4 className="text-base font-normal leading-6 tracking-tight text-left">
                          {res?.name}
                        </h4>
                        <input
                          onChange={(e) => setAdministratorValue(res.name)}
                          name="administrator"
                          type="radio"
                          className="w-[18px] h-[18px]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className={s.description}>
                  <p>Описание</p>
                  <textarea
                    className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[10px] w-full focus:outline-none foc us:shadow-outline"
                    type="text"
                    placeholder="Описание"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
                <div className="grid gap-y-[8px]">
                  <h4>Добавьте типы футбольных полей</h4>
                </div>
                <div className="grid gap-[5px]">
                  <div className="w-full bg-[#F0F0F0] py-[5px] px-[5px] gap:[20px] rounded-[8px] flex justify-between items-center ">
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
      {page === "about" && <Page2 />}
    </>
  );
}
