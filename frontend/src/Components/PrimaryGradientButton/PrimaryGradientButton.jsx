import React from 'react'

const PrimaryGradientButton = ({buttonName, onClick}) => {
    return (
        
            <div  onClick={onClick}   className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border-1 border-green-400  bg-gradient-to-r from-[#1BF0FF] to-[#144DFB]
">{buttonName}</div>
        
    )
}

export default PrimaryGradientButton