
import {FaHome, FaLocationArrow, FaPhone, FaBook} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Mainmenu = () => {
    return (
         <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#f8fafc] text'>

{/*container for the icons*/}
         <div className='icons'>
            <nav> 
                <ul>
                    <li>
                        <Link to = "/">
                            <FaHome /> 
                            <span>Home</span> 
                        </Link>
                    </li>

                    <li>
                        <Link to ="/">
                            <FaLocationArrow /> 
                            <span>Location</span>
                        </Link>
                    </li>

                    <li>
                        <Link to ="/" >
                            <FaPhone /> 
                            <span>Call</span>
                        </Link>
                    </li>

                    <li>
                        <Link to = "/">
                            <FaBook /> 
                            <span>Resource</span>
                        </Link>
                    </li>
                </ul>
            </nav>
         </div>
        </div>
        
        )
};

export default Mainmenu