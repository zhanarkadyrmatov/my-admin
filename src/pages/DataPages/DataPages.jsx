import React from 'react'
import s from './DataPages.module.scss'
import Calendar from '../../components/Calendary/Calendary'
import Draggable from '../../components/Draggable/Draggable'

export default function DataPages() {
  return (
    <div className={s.dataPage}>
      <div className={'mt-[55px] lg:mt-[50px] xl:mt-[40px] grid grid-cols-1 xl:grid-cols-3 gap-y-[20px] xl:gap-[20px]'}>
        <Draggable />
        <div className='col-span-2'>
          <Calendar />
        </div>
      </div>
    </div>
  )
}
