import React from 'react'

const SecondaryGradientButton = ({buttonName,onClick}) => {
    return (
        <div  onClick={onClick}  className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap border-1 border-green-400">{buttonName}</div>
    )
}

export default SecondaryGradientButton