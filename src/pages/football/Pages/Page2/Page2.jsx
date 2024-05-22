import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlinePlusSm } from 'react-icons/hi'
import Time from '../../../../components/Cards/time/Time';

const Page2 = () => {
    const [selectedImage, setSelectedImage] = useState(null);

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


    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
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
    ]

    const  TypeList = [
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
    ]   

    return (
        <div>
            <div>
                <div
                    className={
                        "mt-[50px] p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex lg:flex-row  gap-[10px] "
                    }
                >
                    <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full lg:w-auto">
                        {dataListfootball?.map((res) => (
                            <button
                                className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px]`}
                            >
                                {res.name}
                            </button>
                        ))}
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
                                    {TypeList?.map((res) => (
                                        <button className="rounded-[4px] border border-solid border-gray-200 ">
                                            {res.name}
                                        </button>
                                    ))}
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
                                <Time  />
                                <Time  />
                                <Time  />
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
        </div>
    )
}

export default Page2
