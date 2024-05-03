import React from 'react'

const eventCard = ({heading,subheading,date,place,description}) => {
  return (
    <div className='flex flex-col gap-y-2 border shadow-md rounded-xl p-4'>
        
                <div className='font-bold text-lg border-b'>{heading}</div>
                <div className='text-md text-blue-500'>Position-{subheading}</div>
                <div className='text-sm text-white'>{date}|{place}</div>
                <div className='text-sm text-white'>{description}</div>
            </div>
  )
}

export default eventCard