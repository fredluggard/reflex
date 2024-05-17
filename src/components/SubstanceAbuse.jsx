import React from 'react'
import NavBar from "../components/NavBar";
import drugs from "../images/quickTips/drugs.png"
import {Link} from 'react-router-dom';


function SubstanceAbuse() {
   return (
    <div>
      <nav className="hidden md:block">
        <NavBar/>
        </nav>  

        <div> 
            <div className="bg-mobile whitespce-pre-wrap"> 
                <h1>Substance abuse</h1>
                <div> 
                    <img src={drugs} alt='Drugs'/>
                    <p className='text-xl whitespace-pre'>
                        Emergency response in cases of substance abuse 
                        involves providing immediate care to individuals 
                        who have ingested harmful substances or are 
                        experiencing the effects of drug overdose.
                    </p>
                </div>
            </div>

            <div> 
                <div>
                    <p>See relevant information on</p>
                    <Link to ="#">
                        <img src={drugs} alt="Drugs"/>
                        Substance abuse
                    </Link>
                </div>

                <div>
                    <h3>Here's a summary of what to do:</h3>
                    <div>
                        1.<p>Recognize Substance Abuse Emergencies:</p>
                                <div className="whitespace-pre-wrap">
                                    <ul className="px-10 list-disc ">
                                        <li className='whitespace-pre-wrap'>Substance abuse emergencies can include overdose, 
                                    adverse reactions to drugs, alcohol poisoning, or other 
                                    complications related to drug or alcohol use.
                                        </li>
                                        <li>Signs of a substance abuse emergency may include 
                                    altered mental status, difficulty breathing, seizures, 
                                    unconsciousness, vomiting, and abnormal vital signs.
                                        </li>
                                    </ul>                        
                                </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )  
}
 




export default SubstanceAbuse;