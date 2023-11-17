import React from 'react'
import Service5Props from '../ServicesProps/Service5Props'
import Glad from "../../../../public/images/Glad.svg";
const Ui5 = () => {
    const initial = "Consult Our Expert";
  const header = "Work With Us";
  const subHeader =
    "Need Seamless Access to Global Talent for your Project Needs?";
  const paragraph =
    "Our teams are behind the technical success of an array of world-renowned Fintech, eCommerce, Investment, and other brands";
  return (
    <div>
       <Service5Props 
            header={header}
            subHeader={subHeader}
            paragraph={paragraph}
            initial={initial}
            Glad={Glad}
        />
    </div>
  )
}

export default Ui5
