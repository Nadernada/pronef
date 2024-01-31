'use client'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react'
import useNftStore from '@/hooks/useNftStore';
import NftCard from './NftCard';

const categories = [
  'All',
  'Art',
  'Music',
  'Collectibles',
  'Utility'
]

const Feed = () => {

  const [isActive, setIsActive] = useState('All')
  const nfts = useNftStore(state => state.nfts)
  const searchValue = useNftStore(state => state.filterValue)
  const [following, setFollowing] = useState('following')

  const handleFeed = (e: SelectChangeEvent) => {
    setFollowing(e.target.value as string)
  }

  return (
   <div>
    <div className='flex flex-row gap-x-4 items-center'>
        <p className="text-lg font-bold">Featured Artworks</p>
        <FormControl  sx={{ m: 1, minWidth: 130 }} size="small">
          <InputLabel id="demo-simple-select-label"  className='text-sm'>Show</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={following}
            label="Show"
            className='rounded-full'
            onChange={handleFeed}
          >
            <MenuItem value={'following'}>Following</MenuItem>
            <MenuItem value={'everyone'}>Everyone</MenuItem>
            <MenuItem value={'friends'}>Friends</MenuItem>
          </Select>
        </FormControl>

        <div className='flex flex-row ml-auto gap-x-3'>
          {categories.map((item) => (
            <div
              key={item}
              onClick={() => setIsActive(item)}
              className={`
                rounded-full 
                py-1 
                px-3 
                flex
                justify-center 
                items-center 
                cursor-pointer
                ${isActive === item ? 'bg-neutral-200' : ''}
              `}
              >
              <p className='text-xs font-medium'>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {nfts.map((data) => {
          const similar = isActive === data.category
          if(searchValue !== '')  { 
            if(data?.title.toLowerCase().includes(searchValue)) return (
              <NftCard
                key={data.id}
                data={data}
              />
            ) } else if (similar || isActive === 'All') {
              return (
                <NftCard
                  key={data?.id}
                  data={data}
                />
              )
            } 
        })}
      </div>
    </div>
  )
}

export default Feed