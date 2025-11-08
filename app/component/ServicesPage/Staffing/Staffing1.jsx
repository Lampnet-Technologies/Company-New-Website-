import React from 'react'
import Service1Props from '../ServicesProps/Service1Props'
import AboutImage from "../../../../public/images/AboutImage.svg";

const Staffing1 = () => {
    const header = "IT Staff Outsourcing & Team Augmentation";
  return (
    <div>
        <Service1Props header={header} AboutImage={AboutImage}/>
    </div>
  )
}

export default Staffing1;
