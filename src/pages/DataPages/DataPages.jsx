import React from 'react'
import s from './DataPages.module.scss'
import Calendar from '../../components/Calendary/Calendary'
import Draggable from '../../components/Draggable/Draggable'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getFootballFieldsList } from '../../store/slice/armor'

export default function DataPages() {
  const { footballFields, fields, status } = useSelector((state) => state.armor)

  console.log(footballFields)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFootballFieldsList())
  }, [])

  if (status === 'loading') {
    return <div>loading</div>
  }

  return (
    <div className={"flex flex-col gap-[20px] my-[85px] lg:my-[90px] xl:px-5 px-3"}>
      <div className={`${s.Cards} `}>
        {footballFields.map((res) => (
          <div key={res.id} >
            <h3>{res.name}</h3>
          </div>
        ))}
      </div>
      <div className={'grid grid-cols-1 xl:grid-cols-3 gap-y-[20px] xl:gap-[20px]'}>
        <Draggable data={fields} />
        <div className='col-span-2'>
          <Calendar />
        </div>
      </div>
    </div>
  )
}
