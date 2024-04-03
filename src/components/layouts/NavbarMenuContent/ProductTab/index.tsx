import React from 'react'
import { PRODUCTS } from '@/common/constants'
import VariantsComponent from '@/components/VariantsComponent'
import { Image, Link } from '@nextui-org/react'

const ProductTab = () => {
  return (
    <div className='w-full h-full grid grid-cols-3 gap-10'>
      {PRODUCTS.map((product, index) => {
        return (
          <VariantsComponent
            key={index}
            className='w-full'
            delay={index * 0.1}
          >
         <Link className='flex flex-col items-start text-white w-full space-y-3' href={product.link}> 
              {/* <Image src={product.logo} alt="logo" className='border w-2/3 aspect-square object-contain p-5' removeWrapper radius='lg'/> */}
              <div className='space-y-3'>

              <h1 className='font-medium text-3xl'>{product.name}</h1>
              <p>{product.description}</p>
              </div>
            </Link>
          </VariantsComponent>
        )
      })}
    </div>
  )
}

export default ProductTab
