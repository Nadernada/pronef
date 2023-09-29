'use client'

import { ClockLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <ClockLoader color="#a855f7" size={40} />
    </div>
  )
}

export default Loading