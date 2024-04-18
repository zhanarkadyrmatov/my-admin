import React from 'react'
import s from './DataPages.module.scss'
import Calendar from '../../components/Calendary/Calendary'
import Draggable from '../../components/Draggable/Draggable'

export default function DataPages() {
  return (
    <div className={s.dataPage}>
      <div className={s.wrapper}>
        <Draggable />
        <Calendar />
      </div>
    </div>
  )
}
