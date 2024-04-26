import { useState } from 'react'
import React from 'react'
import { MdDelete } from "react-icons/md";  
import s from './Search.module.scss'
export default function Search() {
    const [search, setSearch] = useState(false)
    return (
        <div>
            <div className={s.search_modal}>
                <div className={s.search_all}>
                    <div className={s.search_title}>
                        <h3>Удалить</h3>
                    </div>
                    <div className={s.MdDelete}>
                        <MdDelete className={s.Delete} size={40} style={{ width: '220px' }} />
                        <h4>Вы действительно хотите удалить</h4>
                    </div>
                    <div className={s.search_button}>
                        <button className={s.btn1}>Удалить</button>
                        <button onClick={() => setSearch(true)} className={s.btn2}>Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
