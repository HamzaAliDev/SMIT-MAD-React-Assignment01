import React from 'react'

export default function Button(props) {
    const{text} = props
    
    return (
        <>
            <button className=' text-white border-0 rounded-1 fw-semibold p-2' style={{backgroundColor: '#191c3b'}}>{text || "Button"}</button>
        </>
    )
}
