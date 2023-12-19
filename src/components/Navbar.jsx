import React from 'react'
import { ShoppingCartIcon} from "@heroicons/react/24/outline"
import Search from './Search'
const Navbar = () => {
  return (
    <header className='min-w-[100px]'>
        <div className='flex  bg-amazonclone text-white h-[60px]'>
            <div className='flex items-center m-4'>
                <img className='h-[30px] w-[80px] m-2' src='../images/amazon.png' />
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Deliever</div>
                    <div className='text-xs xl:text-base'>To India</div>
                </div>
            </div>
            <div className='flex grow relative items-center'>
                <Search />
            </div>
            <div className='flex items-center m-4'>
                 <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Hello, Sign in</div>
                    <div className='text-xs xl:text-base'>Account and Lists</div>
                </div>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-xs xl:text-base'>& Orders</div>
                </div>
                <div className='flex pl-3 pr-3'>
                    <ShoppingCartIcon className='h-[40px]' />
                    <div className='mt-7 text-xs xl:text-sm font-bold '>Cart</div>
                </div>
            </div>
        </div>
        <div className='flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default Navbar