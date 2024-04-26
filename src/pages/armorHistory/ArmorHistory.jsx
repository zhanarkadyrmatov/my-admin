import React from 'react'
import Filter from '../../components/Filter/Filter'
import ContactList from '../../components/ContactList/ContactList'

export default function ArmorHistory() {
    return (
        <div className='my-10 grid gap-y-8'>
            <Filter />
            <ContactList />
        </div>
    )
}
