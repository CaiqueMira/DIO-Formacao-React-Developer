import React from 'react'
import Link from 'next/link'

export default function Button({leftIcon, rightIcon, label, className, ...rest}) {
  return (
    <button 
      className={`p-1 flex justify-center items-center gap-1 bg-white dark:bg-gray-900 rounded-3xl h-10 transition cursor-pointer ${className ?? ''}`} {...rest}>        
        {leftIcon ?? null}
        {label}
        {rightIcon ?? null}
    </button>
  )
}
