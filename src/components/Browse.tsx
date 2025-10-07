import React from 'react'
import { useAppSelector } from '../store/hooks'
import Header from './Header';

const Browse = () => {
  const selector = useAppSelector((store) => store.user)
  const { user } = selector;
  return (
    <div>
      <Header />
      <div className="bg-red-700 text-center text-white h-36 flex- align-center justify-center bg-opacity-80">
        <h1>Hi  {user?.userName} </h1>
      </div>
    </div>
  )
}

export default Browse