import React, { useState } from 'react'
import s from './page.module.scss'
const ScheduleLIst = () => {
    //понидельник
    const [monday, setMonday] = useState(
        {
            endime: "",
            startTime: "",
            checkbox: false
        }
    )
    //вторник
    const [tuesday, setTuesday] = useState(
        {   
            endime: "",
            startTime: "",
            checkbox: false
        }
    )
    //среда
    const [wednesday, setWednesday] = useState({
        endime: "",
        startTime: "",
        checkbox: false
    })
    //четверг
    const [thursday, setThursday] = useState({
        endime: "",
        startTime: "",
        checkbox: false
    })
    //пятница
    const [friday, setFriday] = useState({
        endime: "",
        startTime: "",
        checkbox: false
    })
    //суббота
    const [saturday, setSaturday] = useState({
        endime: "",
        startTime: "",
        checkbox: false
    })
    //воскресенье
    const [sunday, setSunday] = useState(
        {
            endime: "",
            startTime: "",
            checkbox: false
        }
    )
    const data = {monday, tuesday, wednesday, thursday, friday, saturday, sunday}
    return (
        <div className={s.Froom}>
            <div className={s.dya}>
                <p>Понедельник</p>
                <span>
                    <div className={s.time}>
                        <input type="time"  value={monday.startTime} onChange={(e) => setMonday({...monday, startTime: e.target.value})}/>
                        <input type="time" value={monday.endime} onChange={(e) => setMonday({...monday, endime: e.target.value})} />
                    </div>
                    <input onChange={(e) => setMonday({...monday, checkbox: e.target.checked})} checked={monday.checkbox} type="checkbox" />
                </span>
            </div>
            <div className={s.dya}>
                <p>Вторник</p>
                <span>
                    <div className={s.time}>
                        <input type="time"  value={tuesday.startTime} onChange={(e) => setTuesday({...tuesday, startTime: e.target.value})}/>
                        <input type="time" value={tuesday.endime} onChange={(e) => setTuesday({...tuesday, endime: e.target.value})} />
                    </div>
                    <input onChange={(e) => setTuesday({...tuesday, checkbox: e.target.checked})} checked={tuesday.checkbox} type="checkbox" />
                </span>
            </div>
            <div className={s.dya}>
                <p>Среда</p>
                <span>
                    <div className={s.time}>
                        <input type="time"  value={wednesday.startTime} onChange={(e) => setWednesday({...wednesday, startTime: e.target.value})}/>
                        <input type="time" value={wednesday.endime} onChange={(e) => setWednesday({...wednesday, endime: e.target.value})} />
                    </div>
                    <input onChange={(e) => setWednesday({...wednesday, checkbox: e.target.checked})} checked={wednesday.checkbox} type="checkbox" />
                </span>
            </div>
            <div className={s.dya}>
                <p>Четверг</p>
                <span>
                    <div className={s.time}>
                        <input type="time"  value={thursday.startTime} onChange={(e) => setThursday({...thursday, startTime: e.target.value})}/>
                        <input type="time" value={thursday.endime} onChange={(e) => setThursday({...thursday, endime: e.target.value})} />
                    </div>
                    <input onChange={(e) => setThursday({...thursday, checkbox: e.target.checked})} checked={thursday.checkbox} type="checkbox" />
                </span>
            </div>
            <div className={s.dya}>
                <p>Пятница</p>
                <span>
                    <div className={s.time}>
                        <input type="time"  value={friday.startTime} onChange={(e) => setFriday({...friday, startTime: e.target.value})}/>
                        <input type="time" value={friday.endime} onChange={(e) => setFriday({...friday, endime: e.target.value})} />
                    </div>
                    <input onChange={(e) => setFriday({...friday, checkbox: e.target.checked})} checked={friday.checkbox} type="checkbox" />
                </span>
            </div>
            <div className={s.dya}>
                <p>Суббота</p>
                <span>
                    <div className={s.time}>
                        <input type="time"  value={saturday.startTime} onChange={(e) => setSaturday({...saturday, startTime: e.target.value})}/>
                        <input type="time" value={saturday.endime} onChange={(e) => setSaturday({...saturday, endime: e.target.value})} />
                    </div>
                    <input onChange={(e) => setSaturday({...saturday, checkbox: e.target.checked})} checked={saturday.checkbox} type="checkbox" />
                </span>
            </div>
            <div className={s.dya}>
                <p>Воскресенье</p>
                <span>
                    <div className={s.time}>
                        <input type="time"  value={sunday.startTime} onChange={(e) => setSunday({...sunday, startTime: e.target.value})}/>
                        <input type="time" value={sunday.endime} onChange={(e) => setSunday({...sunday, endime: e.target.value})} />
                    </div>
                    <input onChange={(e) => setSunday({...sunday, checkbox: e.target.checked})} checked={sunday.checkbox} type="checkbox" />
                </span>
            </div>
        </div>
    )
}

export default ScheduleLIst
