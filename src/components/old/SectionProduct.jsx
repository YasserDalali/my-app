import React from 'react'

function SectionProduct({title, desc, img, }) {
  return (
    <section className='flex flex-col items-center justify-center gap-2 text-center'>
        <img className='max-h-[50px]' src={img} alt="" />
        <p className='text-3xl font-bold'>{title}</p>
        <p className='text-lg'>{desc}</p>
    </section>
  )
}

export default SectionProduct
