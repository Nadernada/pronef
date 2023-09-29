'use client'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'

const categories = [
  'All',
  'Art',
  'Music',
  'Collectibles',
  'Utility'
]

const FeedHeader = () => {

  const [isActive, setIsActive] = useState('Art')

  return (
    <div className='flex flex-row gap-x-4 items-center'>
      <p className="text-lg font-bold">Feed</p>
      <FormControl  sx={{ m: 1, minWidth: 130 }} size="small">
        <InputLabel id="demo-simple-select-label"  className='text-sm'>Following</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Following"
          className='rounded-full'
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
  )
}

export default FeedHeader