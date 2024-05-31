import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import BookId from '../Cards/BookId/BookId';

export default function ReserveModal() {
  const { fields } = useSelector((state) => state.fields);
  const [fieldDelete, setFieldDelete] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center  z-[1000]">
      <div className='absolute top-0 left-0 h-full w-full bg-white opacity-50' />
      <div className='bg-white absolute rounded-[15px] w-[1200px] p-[20px] shadow-md flex flex-col gap-2'>
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
