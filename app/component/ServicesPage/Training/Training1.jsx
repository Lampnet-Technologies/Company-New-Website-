import React from 'react'
import Service1Props from '../ServicesProps/Service1Props'
import AboutImage from "../../../../public/images/AboutImage.svg";

const Training1 = () => {
    const header = "Training & IT Consulting";
  return (
    <div>
      <Service1Props header={header} AboutImage={AboutImage}/>
    </div>
  )
}

export default Training1
