import React from 'react'

const HeadSubhead = ({name, subname}) => {
  return (
    <div className="font-medium text-center mt-16">
        <p className="text-primary-main text-xl">{name}</p>
        <p className="text-[#FFFFFF] text-[2.5rem]">{subname}</p>
    </div>
  )
}

export default HeadSubhead