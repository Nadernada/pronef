'use client'

import useNftStore from '@/hooks/useNftStore'
import { useUser } from '@/hooks/useUser'
import Image from 'next/image'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Header = () => {

  const user = useUser()
  const [searchValue, setSearchValue] = useState<string>('')

  const setFilterValue = useNftStore(state => state.setFilterValue)


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setTimeout(() => {
      setFilterValue(e.target.value)
    

    }, 200)
  }

  return (
    <div className='flex flex-row gap-x-2 w-full'>
      <div
        className='
          flex
          flex-row
          items-center
          gap-x-3
          bg-white
          rounded-lg
          flex-1
          p-2 
          shadow-lg
          shadow-neutral-200/50
        '
      >
        <BiSearch size={25} />
        <input
          onChange={handleSearch}
          placeholder='Search NFTs'
          className='text-xs text-neutral-400 w-full font-medium focus:outline-none focus:text-black'
          value={searchValue}
        />
      </div>
      <div
        className='flex
          justify-center
          items-center
          gap-x-1
          bg-white
          rounded-lg
          w-fit
          py-2
          px-3
          shadow-lg
          shadow-neutral-200/50
        '
      >
        <Image
          src='/assets/icons/eth.png'
          alt='eth'
          width={20}
          height={20}
        />
        <p className='text-sm font-bold'>{user ? user?.coins + ' ETH' : '0 ETH'}</p>
      </div>
    </div>
  )
}

export default Header