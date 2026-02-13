import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const MainBanner = () => {
  const { t } = useAppContext()

  return (
    <div className='relative'>
      {/* Баннеры для разных экранов */}
      <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block'/>
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full block md:hidden'/>

      {/* Контент на баннере */}
      <div className="absolute top-1/4 left-4 right-4 md:left-16 md:right-auto text-black max-w-xl">
        <h1 className='text-xl md:text-5xl font-bold mb-4 leading-snug'>
          {t("banner_title")}
        </h1>

        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <Link
            to="/products"
            className='group flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded text-white w-full md:w-auto'
          >
            {t("banner_shop_now")}
            <img className='md:hidden transition group-hover:translate-x-1' src={assets.white_arrow_icon} alt="arrow"/>
          </Link>

          <Link
            to="/products"
            className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'
          >
            {t("banner_explore_deals")}
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
