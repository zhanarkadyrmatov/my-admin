import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 z-[11111] bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-center items-center'>
      <CircularProgress color="secondary" />
    </div>
  )
}
