import React, { useState} from 'react';
import {FaHome, FaMapMarkerAlt, FaPhoneAlt, FaBook} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    const [menu, setMenu] = useState(false);
    const handleClick = () => setMenu(!menu);
  
    return (
        <div className='md:fixed rounded-xl w-full h-1 flex text-sm justify-between items-center px-20 pt-10 pb-10 bg-[#b91c1c] text-black font-light'>
{/*container for the icons*/}
            <nav className=''> 
                <ul className='flex justify-center  gap-10'>
                    <li>
                        <Link to = "/"><FaHome size={'15px'} className='mx-2'/> <span>Home</span> </Link>
                    </li>

                    <li>
                        <Link to ="/"> <FaMapMarkerAlt size={'15px'} className='mx-5' /> <span>Location</span> </Link>
                    </li>

                    <li>
                        <Link to ="/" > <FaPhoneAlt size={'15px'} className='mx-2' /> <span>Call</span> </Link>
                    </li>

                    <li>
                        <Link to = "/"> <FaBook size={'15px'} className='mx-6' /> <span>Resource</span> </Link>
                    </li>
                </ul>
            </nav>
        </div>
        
        )
};

export default MainMenu;