import React from 'react'

export default function Textarea({ control, label, register, errors, isTouched, ...rest }) {
  return (
    <>
      <div className={`${rest.className} mx-5`}>
        <label>
            {label}
            <textarea type="text" className={`bg-white dark:bg-gray-900 w-full p-2 rounded mt-2 h-24`} {...register}/>
        </label>
        {errors && <span className='text-red-400 text-sm'>O campo {label} é obrigatório</span>}
      </div>
    </>
  )
}
