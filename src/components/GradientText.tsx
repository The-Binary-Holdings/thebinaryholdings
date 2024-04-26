import React, { ReactNode } from 'react'
import clsx from 'clsx'

const GradientText = ({className = "", children} : {className?: string, children: ReactNode}) => {
  return (
    <h1 className={clsx("bg-gradient-to-b from-white to-[#BFBFBF] inline-block text-transparent bg-clip-text", className)}>
      {children}
    </h1>
  )
}

export default GradientText
