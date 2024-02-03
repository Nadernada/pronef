
import { LuLayoutDashboard } from 'react-icons/lu'
import { BiSolidDashboard } from 'react-icons/bi'
import { BsCart2, BsCartFill } from 'react-icons/bs'
import { MdOutlineAnalytics, MdAnalytics } from 'react-icons/md'
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar, AiOutlineHistory } from 'react-icons/ai'
import { LiaWalletSolid } from 'react-icons/lia'
import { IoIosWallet } from 'react-icons/io'
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi'

export const Links = [
  {
    label: 'Dashboard',
    path: '/',
    iconOutline: LuLayoutDashboard,
    iconFill: BiSolidDashboard,
  },
  {
    label: 'Market',
    path: '/market',
    iconOutline: BsCart2,
    iconFill: BsCartFill,
  },
  {
    label: 'Active Bids',
    path: '/bids',
    iconOutline: MdOutlineAnalytics,
    iconFill: MdAnalytics,
  },
  {
    label: 'Favorite',
    path: '/favorite',
    iconOutline: AiOutlineHeart,
    iconFill: AiFillHeart,
  },
  {
    label: 'My Portfolio',
    path: '/portfolio',
    iconOutline: AiOutlineStar,
    iconFill: AiFillStar,
  },
  {
    label: 'Wallet',
    path: '/wallet',
    iconOutline: LiaWalletSolid,
    iconFill: IoIosWallet,
  },
  {
    label: 'History',
    path: '/history',
    iconOutline: AiOutlineHistory,
    iconFill: AiOutlineHistory,
  },
  {
    label: 'Settings',
    path: '/settings',
    iconOutline: IoSettingsOutline,
    iconFill: IoSettingsSharp,
  },
  {
    label: 'Logout',
    path: '/logout',
    iconOutline: FiLogOut,
    iconFill: FiLogOut,
  },
]