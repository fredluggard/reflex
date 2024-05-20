import React from 'react'
import NavBar from "../components/NavBar";
import drugs from "../images/quickTips/drugs.png"
import {Link} from 'react-router-dom';
import {FaChevronDown} from 'react-icons/fa';
import '../style/substanceAbuse.css';
// import {useRef} from 'react'; 


function SubstanceAbuse() {
   return (
    <div className='relative min-h-screen bg-mobile-bg md:bg-desktop-bg'>
      <nav className=" static hidden md:block">
        <NavBar/>
        </nav>  

        <div className='relative flex justify-items-center h-40 md:flex md:flex-col flex-row'>  
            <div className="fixed w-1/2 mx-40"> 
                     <h1 className='font-bold text-2xl mt-6 '>Substance abuse</h1>
                    <img src={drugs} className='rounded mt-6 h-80' alt='Drugs'/>
                    <p className='text-wrap font-light text-lg text-gray-900 justify w-4/6 mt-6 leading-6'>
                        Emergency response in cases of substance abuse 
                        involves providing immediate care to individuals 
                        who have ingested harmful substances or are 
                        experiencing the effects of drug overdose.
                    </p>
            </div>

            <div className='relative left-1/2 w-1/2 px-20'> 
                    <div className=' flex w-full gap-2 mb-5'>
                    <p className='w-60 text-sm text-gray-700 mt-2'>See relevant information on</p>
                    <Link to ="#" className='flex justify-items-center items-center px-2 text-sm w-52 h-7 gap-3 border-solid border border-red-500 rounded-full '>
                        <img src={drugs} className='rounded-full size-5  text-sm' alt="Drugs"/>
                        <p>Substance abuse</p>
                        <FaChevronDown size={'10px'} className=' text-red-500'/>
                    </Link>
                    </div>
                    <h3 className='font-medium text-xl text-gray-900 mb-3'>Here's a summary of what to do:</h3>
                    
                    <div className='text-gray-800'>    
                        <div className='flex'>
                        1.  <p className='font-light text-2xl mb-3 mx-3'> Recognize Substance Abuse 
                             <p> Emergencies: </p>
                            </p>
                        </div>
                                <ul className="px-10 list-disc font-light text-sm mx-5">
                                    <li>Substance abuse emergencies can include overdose, 
                                    adverse reactions to drugs, alcohol poisoning, or other 
                                    complications related to drug or alcohol use.
                                    </li>
                                    <li>Signs of a substance abuse emergency may include 
                                    altered mental status, difficulty breathing, seizures, 
                                    unconsciousness, vomiting, and abnormal vital signs.
                                    </li>
                                </ul>  
                    </div>  

                    <div className='mt-3 text-gray-800'>
                        <div className='flex'>
                        2.<p className='font-light text-2xl  mb-3 mx-3'>Assessing the Situation:</p>
                        </div>
                            <ul className="px-10 list-disc font-light text-sm mx-5 ">
                                <li> Ensure safety of the person and those around them.</li>
                                <li>Look for signs of drug use in the vicinity.</li>
                                <li>Check the person's responsiveness and assess their 
                                    breathing and circulation.</li>
                            </ul> 
                    </div>

                   <div className='mt-3 text-gray-800'>
                        <div className='flex'>
                        3.<p className=' font-light text-2xl  mb-3 mx-3'>Calling for Help:</p>
                        </div>
                            <ul className="px-10 list-disc font-light text-sm mx-5 ">
                                <li>If the person is unresponsive or
                                experiencing severe symptoms, call emergency services
                                immediately (e.g 122 in Nigeria).
                                </li>
                                <li>Provide clear and concise information to dispatchers,
                                    including the person's condition, any known substances
                                    ingested, and the location.
                                </li>
                            </ul>
                    </div>                      

                    <div className='mt-3 text-gray-800'>
                        <div className='flex'>
                       4.<p className='font-light text-2xl  mb-3 mx-3'>Providing First Aid:</p>
                       </div>
                            <ul className="px-10 list-disc font-light text-sm mx-5 ">
                                <li>Ensure the person has an open airway by tilting their
                                    head back and lifting the chin.
                                </li>
                                <li>If the person is breathing, place them in the recovery
                                    position to prevent aspiration of vomit.
                                </li>
                                <li>If the person is not breathing, start CPR immediately.</li>
                                <li>Monitor the person's vital signs, including pulse, breathing
                                    rate, and level of consciousness.
                                </li>
                            </ul>
                    </div> 

                    <div className='mt-3 text-gray-800'>
                        <div className='flex'>
                        5.<p className='font-light text-2xl  mb-3 mx-3'>Managing Alcohol Poisoning:</p>
                        </div>
                                <div>   
                                        <ul className="px-10 list-disc font-light text-sm mx-5 ">
                                            <li>Incase of alcohol poisoning, monitor the person's
                                        breathing and level of consciousness.
                                            </li>
                                            <li>Keep the person awake and hydrated if conscious, but
                                                    do not force them to drink.
                                            </li>
                                            <li>Seek medical attention promptly, as alcohol poisioning
                                                    can be life-threatening.
                                            </li>
                                        </ul>                        
                    </div>

                                    <div className='mt-3 text-gray-800'>
                                        <div className='flex'>
                                        6.<p className='font-light text-2xl mb-3 mx-3'> Ensuring Safety:</p>
                                        </div>
                                            <ul className="px-10 list-disc font-light text-sm mx-5 ">
                                                <li>Remove any remaining drugs or alcohol from the
                                                    person's vicinity to prevent further ingestion.
                                                </li>
                                                <li>Ensure the safety of bystanders and emergency
                                                    responders.
                                                </li>
                                            </ul>                    
                                    </div>

                                    <div className='mt-3 text-gray-800'>
                                        <div className='flex'>
                                        7.<p className='font-light text-2xl  mb-3 mx-3'> Collaborating with Medical Professionals:</p>
                                        </div>
                                            <ul className="px-10 list-disc font-light text-sm mx-5">
                                                <li>Provide relevant information to medical Professionals
                                                    upon their arrival, including the person's medical history,
                                                    drug history, and any known allergies or pre-existing
                                                    conditions.
                                                </li>
                                                <li>Cooperate with  emergency medical personnel and 
                                                    follow their instructions.
                                                </li>
                                            </ul>                        
                                    </div>

                                    <div className='mt-3 text-gray-800'>
                                        <div className='flex'>
                                        8.<p className='font-light text-2xl  mb-3 mx-3'> Prevention and Education:</p>
                                        </div>
                                            <ul className="px-10 list-disc font-light text-sm mx-5">
                                                <li>Promote substance abuse prevention and education
                                                    initiatives in the community to raise awareness about 
                                                    the risks of drug and alcohol use and overdose.
                                                </li>
                                                <li>Provide information on harm reduction strategies, such 
                                                    as safe drug use practices and overdose prevention measures.
                                                </li>
                                            </ul>                        
                                    </div>
                                </div>
            </div>
        </div>
    </div>
  )  
}
 




export default SubstanceAbuse;