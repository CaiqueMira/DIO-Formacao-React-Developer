import React from 'react'
import Link from 'next/link'

export default function ButtonLink({leftIcon, rightIcon, label, type, url, ...rest}) {
  return (
    <Link 
      as={url}
      href={url}>
        <span className={`p-1 flex justify-center items-center gap-1 bg-white dark:bg-gray-900 rounded-3xl h-10 transition cursor-pointer ${rest.className ?? ''}`}>
          {leftIcon ?? null}
          <span>{label}</span>
          {rightIcon ?? null}
        </span>
    </Link>
  )
}
