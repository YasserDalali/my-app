import React, { useState } from 'react'
import {close, logo, menu} from '../../assets'
import { navLinks } from '../../constants'


function NavBar() {

  const [opened, setOpened] = useState(false)

  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
      
      <img src={logo} alt="" className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav) => (
            <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 last:mr-0`} key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

      </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={opened ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setOpened((prev) => !prev)}  />
              <div
              className={`${opened ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                  <ul className='list-none flex flex-col justify-end items-center flex-1'>
                      {navLinks.map((nav) => (
                        <li className={`font-poppins font-normal cursor-pointer text-[16px] mb-10 last:mb-0`} key={nav.id}>
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      ))}

                  </ul>

              </div>
          </div>

    </div>
  )
}

export default NavBar