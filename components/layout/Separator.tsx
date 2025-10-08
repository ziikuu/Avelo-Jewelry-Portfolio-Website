import React from 'react'

interface SeparatorProps {
    text: string;
}

const Separator: React.FC<SeparatorProps> = ({text}) => {
  return (
    <div className='mb-23.5 mt-23.5'>
        <h3 className='font-black'>{text}</h3>
        <svg width="1092" height="2" viewBox="0 0 1092 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L1091 0.999905" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    </div>
  )
}

export default Separator