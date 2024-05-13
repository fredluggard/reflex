import React from 'react'


export default function SearchBar(){
    return(
        <div className='wrapper'>
            <input 
                type="text"
                placeholder="Search..."
                value=""
                className="bg-gray-100 rounded-full py-2 px-4 w-half outline-none focus:ring focus:ring-blue-300"
            
            />
        </div>
    )
}