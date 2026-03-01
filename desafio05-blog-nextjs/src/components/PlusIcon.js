import React from 'react'

export default function PlusIcon({ className, color = 'text-primary' }) {
    return (
        <svg 
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={`stroke-current ${color}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5h2v14h-2zM5 11h14v2H5z"
            />
        </svg>
    )
}
