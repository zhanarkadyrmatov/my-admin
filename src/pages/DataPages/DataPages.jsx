import React from 'react'
import s from './DataPages.module.scss'
import Calendar from '../../components/Calendary/Calendary'
import Draggable from '../../components/Draggable/Draggable'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getFootballFieldsList } from '../../store/slice/armor'

export default function DataPages() {
  const {footballFields , fields, status} =  useSelector((state) => state.armor)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFootballFieldsList())
  },[])
  if (status === 'loading') {
    return <div>loading</div>
  }
  return (
    <div className={s.dataPage}>
      <div className={`mt-[55px] lg:mt-[50px] xl:mt-[40px] ${s.Cards} `}>
        {footballFields.map((res) => (
          <div key={res.id} >      
            <h3>{res.name}</h3> 
          </div>
        ))}
      </div>
      <div className={'mt-[55px] lg:mt-[50px] xl:mt-[40px] grid grid-cols-1 xl:grid-cols-3 gap-y-[20px] xl:gap-[20px]'}>
        <Draggable data={fields}/>
        <div className='col-span-2'>
          <Calendar />
        </div>
      </div>
    </div>
  )
}
