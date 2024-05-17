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
            <div className="bg-mobile"> 
                <h1>Substance abuse</h1>
                <div> 
                    <img src={drugs} alt='Drugs'/>
                    <p>
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
                        <img src={?}>
                    </Link>
                </div>

                <div>
                    <p></p>
                </div>

            </div>

        </div>
    </div>
  )  
}
 




export default SubstanceAbuse;