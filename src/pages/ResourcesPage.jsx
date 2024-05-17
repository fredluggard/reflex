import React from "react";
import NavBar from "../components/NavBar";
import firstAid from "../images/quickTips/firstAid.png"
import fireExtinguisher from "../images/quickTips/fireExtinguisher.png"
import driver from "../images/quickTips/driver.png"
import drugs from "../images/quickTips/drugs.png"
import motherChild from "../images/quickTips/motherChild.png"
import phoneCall from "../images/quickTips/phoneCall.png"
import '../style/quickTips.css'

function ResourcesPage() {
  return (
   <div>
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <div className="md:flex bg-mobile text-2xl mt-20 px-24 font-bold">
        <h1>Quick Tips & Resources</h1>
      </div>

      <div className='quick-tips'>
        <div className='tips1'>
          <div> 
            <img src={firstAid} alt='First Aid'/>
            <p className='firstaid-tips'>First-aid tips</p>
          </div>
          <div> 
            <img src={fireExtinguisher} alt='First Extinguisher'/>
            <p className='fire-tips'>Fire safety</p>
          </div>
          <div> 
            <img src={driver} alt='Driver'/>
            <p className='driver-tips'>Road & driver safety</p>
          </div>
           <div> 
            <img src={drugs} alt='Drugs'/>
            <p className='drug-tips'>Substance abuse</p>
          </div>
        </div>

        <div className='tips2'>
          <div> 
            <img src={motherChild} alt='Mother and child'/>
            <p className='violence-tips'>Domestic violence</p>
          </div>
          <div> 
            <img src={phoneCall} alt='Phone Call'/>
            <p className='emergency-tips'>Emergency contacts</p>
          </div>
           <div> 
            <img src alt=''/>
            <p></p>
          </div>
           <div> 
            <img src alt=''/>
            <p></p>
          </div>


        </div>
      </div>

    </div>
  );
}

export default ResourcesPage;
