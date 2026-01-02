import React from 'react'

const PrimaryGradientButton = ({buttonName, onClick}) => {
    return (
        
            <div  onClick={onClick}   className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border-1 border-green-400  bg-green-400">{buttonName}</div>
        
    )
}

export default PrimaryGradientButton