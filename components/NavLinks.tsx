'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { IconType } from "react-icons"
import useLogoutModal from "@/hooks/useLogoutModal"
import { useSession } from "@supabase/auth-helpers-react"

interface NavLinksProps {
  label: string
  iconOutline: IconType
  iconFill: IconType
  path: string
}

const NavLinks: React.FC<NavLinksProps> = ({
  label,
  iconFill: IconFill,
  iconOutline: IconOutline,
  path
}) => {

  const pathname = usePathname()
  const isActive = pathname === path
  const logoutModal = useLogoutModal()
  const session = useSession()


  if (label !== 'Logout') {
    return (
      <Link
        href={path}
        className='flex flex-col items-center md:items-start'
      >
        {isActive && <div className="h-[30px] w-2 rounded-md absolute -left-[4px] -translate-y-1 bg-black" />}
        <div
          key={label}
          className={`
            flex
            gap-x-4
            md:pl-3
            items-center
            hover:text-black
            transition-colors
            ${isActive ? 'text-black' : 'text-neutral-400'}
          `}
        >
          {isActive ? <IconFill size={25} /> : <IconOutline size={25} />} 
          <h3 className='hidden md:flex font-semibold text-sm cursor-pointer'>
            {label}
          </h3>
        </div>
        {path === '/favorite' && <div className="h-[2px] w-[90%] bg-neutral-200 mt-5" />}
      </Link>
    )
  } else if(session) {
    return (
      <button
        onClick={logoutModal.onOpen}
        className={`mt-auto flex flex-col items-center md:items-start`}
      >
        <div
          key={label}
          className={`
            flex
            gap-x-4
            md:pl-3
            items-center
            transition-colors
            text-red-500 hover:text-red-600
          `}
        >
          <IconFill size={25} />
          <h3 className='hidden md:flex font-semibold text-sm cursor-pointer'>
            {label}
          </h3>
        </div>
      </button>
    )
  }

}

export default NavLinks