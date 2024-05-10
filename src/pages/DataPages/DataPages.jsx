import React from 'react'
import s from './DataPages.module.scss'
import Calendar from '../../components/Calendary/Calendary'
import Draggable from '../../components/Draggable/Draggable'

export default function DataPages() {
  
  const data =[
    {
      "id": 2,
      "name": "Sportive Complex",
      "description": "Modern sports compl...",
    },
    {
      "id": 3,
      "name": "Rent sports grounds",
      "description": "Rent sports grounds",
    },
    {
      "id": 4,
      "name": "Mini-football hall",
      "description": "Mini-football hall",
    },
    {
      "id": 5,
      "name": "Football field",
      "description": "Football field",
    }
  ]
  return (
    <div className={s.dataPage}>
    <div className={`mt-[55px] lg:mt-[50px] xl:mt-[40px] ${s.Cards} `}>
    {data.map((res)=> (
      <div key={res.id}>        <h3>{res.name}</h3>
      <p>{res.description}</p>
      </div>

    ))}
    </div>
      <div className={'mt-[55px] lg:mt-[50px] xl:mt-[40px] grid grid-cols-1 xl:grid-cols-3 gap-y-[20px] xl:gap-[20px]'}>
        <Draggable />
        <div className='col-span-2'>
          <Calendar />
        </div>
      </div>
    </div>
  )
}
