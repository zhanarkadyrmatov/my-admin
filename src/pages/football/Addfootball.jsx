import React, { useState, useEffect } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";
import img7 from "../../img/img7.svg";
import s from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdvantages,
  getLocationsCities,
  getSportComplexList,
  postAdvantages,
} from "../../store/slice/create-foobol-slice";
import Page2 from "./Pages/Page2/footballCreate";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import YandexMap from "../../components/YandexMap/YandexMap";
const Pe = ({ children }) => <p className={s.Pe}>{children}</p>;

export default function Addfootball() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIamgeFile, setSelectedImageFile] = useState(null);
  const navigate = useNavigate();
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImageFile(files);
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  //about
  const [page, setPage] = useState("home");
  const dispatch = useDispatch();
  const {
    advantages,
    locationsCities,
    sportComplexList,
    isCreate,
    idFields,
    creacteFoobolStatus,
    status,
  } = useSelector((state) => state.createFoobol);
  const [newName, setNewName] = useState();
  const [locationsCitiesValue, setLocationsCitiesValue] = useState(null);
  const [address, setAddress] = useState(null);
  const [district, setDistrict] = useState(null);
  const [isModalMap, setIsModalMap] = useState(false);
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [ImageFile, setImageFile] = useState();
  const [foodbolId, setFoodbolId] = useState(null);

  console.log(locationsCitiesValue, newName, address, district, description);

  const handlerImage = (event) => {
    const files = Array.from(event.target.files);
    setImageFile(files);
    const url = URL.createObjectURL(event.target.files[0]);
    if (event.target.files[0]) {
      setImageUrl(url);
    }
  };
  const [mapLatLon, setMapLatLon] = useState();


  useEffect(() => {
    dispatch(getAdvantages());
    dispatch(getLocationsCities());
    dispatch(getSportComplexList());
  }, []);

  //WhatsApp
  const [whatsappVlaue, setWhatsappVlaue] = useState("");
  const [whatsappList, setWhatsappList] = useState([]);

  const handleAddWhatsappList = () => {
    if (whatsappVlaue?.length < 17) return;
    setWhatsappList([...whatsappList, whatsappVlaue]);
    setWhatsappVlaue("");
  };

  //telegram
  const [errorList, setErrorList] = useState([]);

  const [advantagesList, setAdvantagesList] = useState([]);
  const [complex_type, setComplex_type] = useState();

  const [administratorValue, setAdministratorValue] = useState();
  const handlerPostCreacteFoobolField = () => {
    const errors = {};

    // Обработка advantagesList для удаления пустых описаний
    const processedAdvantagesList = advantagesList?.map((item) => {
      if (item.description === "") {
        return { advantages: item.name };
      }
      return item;
    });

    const data = {
      name: newName,
      description: description,
      administrator: 1,
      address: address,
      city: locationsCitiesValue,
      district: district,
      latitude: mapLatLon?.[0],
      longitude: mapLatLon?.[1],
      advantages: processedAdvantagesList,
      sport_complex_type: complex_type,
    };

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("administrator", data.administrator);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("district", data.district);
    formData.append("latitude", data.latitude);
    formData.append("longitude", data.longitude);
    ImageFile?.forEach((image, index) => {
      formData.append("back_ground_foto", image);
    });
    selectedIamgeFile?.forEach((image, index) => {
      formData.append("main_foto", image);
    });
    formData.append("sport_complex_type", data.sport_complex_type);
    for (const [key, value] of Object.entries(data)) {
      if (!value && value !== 0 && key !== "advantages") {
        errors[key] = "Обязательное поле *";
      }
    }
    if (Object.keys(errors).length > 0) {
      setErrorList(errors);
      return;
    }

    const newData = {
      data: processedAdvantagesList,
      formData: formData,
    };

    dispatch(postAdvantages(newData));
  };

  const goToPage = (pageName) => {
    handlerPostCreacteFoobolField();
  };

  const [administratorList, setAdministratorList] = useState([
    { name: "Erik", id: 1, type: "Менеджер " },
    { name: "john", id: 2, type: "Админ" },
    { name: "alex", id: 3, type: "Админ" },
    { name: "jane", id: 4, type: "Техник" },
    { name: "jane", id: 5, type: "Админ" },
  ]);
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


  useEffect(() => {
    if (isCreate === false) {
      navigate(`/fields/add/${idFields}`);
    }
  }, [isCreate]);

  if (isCreate === true) {
    return <div>
      <Loader />
    </div>;
  }
  return (
    <div className="mx-[20px] mt-[90px] mb-[20px]">
      {page === "home" && (
        <div className="mt-[50px]">
          <div className=" grid-cols-[1fr] grid xl:grid-cols-[1fr_2fr] md: gap-[20px]">
            {isModalMap && (
             <YandexMap setMapLatLon={setMapLatLon} mapLatLon={mapLatLon} setIsModalMap={setIsModalMap}  />
            )}
            <div className="h-min w-full rounded-[10px] bg-white">
              <div className="p-[20px] border-b border-solid border-opacity-10 border-black">
                <h4>Преимущества</h4>
              </div>
              <div className={s.checkboxList}>
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

                              handleAdvantages(data, e.target.checked);
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
            <div className="bg-[#fff] h-min w-full rounded-[10px]">
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
                          backgroundImage: `url(${selectedImage != null ? selectedImage : img7
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
                        <label
                          htmlFor="uploa1d"
                          className="w-full h-[150px] position-relative flex flex-col items-center justify-center bg-gray-100 rounded shadow-md cursor-pointer"
                        >
                          <BiSolidCameraPlus size={30} />
                          <input
                            type="file"
                            id="uploa1d"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                      <p className="text-center font-medium text-[13px] leading-4 text-[#222222]">
                        Коснитесь, чтобы загрузить фото обложку
                      </p>
                    </div>
                    <div className="grid justify-items-center gap-y-[10px]">
                      <div className="w-full overflow-hidden h-[150px] position-relative flex flex-col items-center justify-center bg-gray-100 rounded shadow-md">
                        <label
                          htmlFor="upload"
                          className="relative w-full h-[150px] position-relative flex flex-col items-center justify-center bg-gray-100 rounded shadow-md cursor-pointer"
                        >
                          {imageUrl && (
                            <img
                              style={{
                                position: "absolute",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                              src={imageUrl}
                              alt=""
                            />
                          )}
                          <BiSolidCameraPlus size={30} />
                          <input
                            type="file"
                            id="upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handlerImage}
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
                      className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] border-[2px] border-[#1C1C1C0D] outline-none w-full focus-within:border-[green] focus-within:border-[2px]"
                      type="text"
                      placeholder="El-Clasico"
                    />
                    {errorList?.name && <Pe>{errorList?.name}</Pe>}
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
                      className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] border-[2px] border-[#1C1C1C0D] outline-none w-full focus-within:border-[green] focus-within:border-[2px]"
                      type="text"
                      placeholder="г. Москва, ул. Пушкина, д. 17"
                    />
                    {errorList?.address && <Pe>{errorList?.address}</Pe>}
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
                      className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] border-[2px] border-[#1C1C1C0D] outline-none w-full focus-within:border-[green] focus-within:border-[2px]"
                      type="text"
                      placeholder="42.9797372189141,74.35650861718749"
                    />
                    {errorList?.longitude && <Pe>{errorList?.longitude}</Pe>}
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
                      className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] border-[2px] border-[#1C1C1C0D] outline-none w-full focus-within:border-[green] focus-within:border-[2px]"  
                      type="text"
                      placeholder="Округ"
                    />
                    {errorList?.district && <Pe>{errorList?.district}</Pe>}
                  </div>
                </div>
                <div className="grid gap-y-[8px] ">
                  <h4>Выберите тип</h4>
                  <div className="sm:grid-cols-2 grid gap-[10px] grid-cols-1">
                    {sportComplexList?.map((res, i) => (
                      <button
                        key={i}
                        className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] flex justify-between items-center "
                      >
                        <h4 className="text-base font-normal leading-6 tracking-tight text-left">
                          {res?.title}
                        </h4>
                        <input
                          onChange={(e) => setComplex_type(res.id)}
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
                  {errorList?.city && <Pe>{errorList?.city}</Pe>}
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
                  {errorList?.administrator && (
                    <Pe>{errorList?.administrator}</Pe>
                  )}
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
                  {errorList?.description && <Pe>{errorList?.description}</Pe>}
                  <textarea
                    className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[10px] w-full focus:outline-none foc us:shadow-outline"
                    type="text"
                    placeholder="Описание"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>

                <button
                  onClick={() => goToPage("about")}
                  className={`p-[8px] bg-[#3f58e5] rounded-[8px] duration-300 text-base font-medium leading-5 text-center text-[#fff] ${newName && locationsCitiesValue && district && description && mapLatLon && address ? "opacity-100 сursor-pointer hover:shadow-lg" : "opacity-50"}`}
                >
                  Далее
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === "about" && <Page2 />}
    </div>
  );
}