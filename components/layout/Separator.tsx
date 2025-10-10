import React from 'react'

interface SeparatorProps {
    text: string;
}

const Separator: React.FC<SeparatorProps> = ({text}) => {
  return (
    <div id='sepparator' className='mb-23.5 mt-23.5'>
        <h3 className='font-black'>{text}</h3>
        <hr className='border-1' />
    </div>
  )
}

export default Separator