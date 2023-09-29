'use client'

import Image from "next/image"
import NavLinks from "./NavLinks"
import { Links } from "@/constants"
import RightBar from "./RightBar"

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({
  children
}) => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="w-[90px] md:w-3/12 lg:w-2/12 h-full bg-white py-8 px-3 md:px-6">
        <Image
          src='/assets/images/logo2.png'
          alt="logo"
          width={110}
          height={40}
          className="object-cover"
        />
        <div className="flex flex-col gap-y-5 py-10 h-full">
          {Links.map((link) => (
            <NavLinks key={link.label} {...link} />
          ))}
        </div>
      </div>

      <div className="flex-1 h-full py-6 px-8 bg-neutral-100 overflow-y-auto overflow-x-hidden no-scrollbar">
        {children}
      </div>

      <div className="hidden lg:block w-3/12 bg-white py-8 px-3 md:px-6">
        <RightBar />
      </div>
    </div>
  )
}

export default Sidebar