import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import BookId from '../Cards/BookId/BookId';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFields } from '../../store/slice/fields-slice';

export default function ReserveModal({ setReserve }) {
  const { fields } = useSelector((state) => state.fields);
  const [fieldDelete, setFieldDelete] = useState(false);


  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center  z-[1000]">
      <div onClick={() => setReserve(false)} className='absolute top-0 left-0 h-full w-full bg-[#000] opacity-50' />
      <div className='bg-white absolute rounded-[15px] w-[1200px] h-[70%] p-[20px]  flex flex-col gap-2'>
        <p className='text-[20px] font-[500] text-[#000]'>Выберите поле</p>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] 3xl:grid-cols-4"
          }
        >
          {fields?.map((item) => (
            <BookId
              fieldDelete={fieldDelete}
              setFieldDelete={setFieldDelete}
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
