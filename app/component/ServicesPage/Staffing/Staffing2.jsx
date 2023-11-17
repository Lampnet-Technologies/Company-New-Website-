import React from 'react'
import Service2Props from "../ServicesProps/Service2Props";


const Staffing2 = () => {
    const header = "IT Staff Outsourcing & Team Augmentation";

  const subheader =
    "We Help You Achieve Your Business Goals with Top-notch Staffing Solutions";
  const paragraph =
    "Staff outsourcing and team augmentation involve hiring external professionals to work on a project or join an existing team to supplement and enhance the skills and expertise of your current staff. It can help your business achieve its goals while saving time and resources.";

  const paragraph2 =
    "At Lampnet Solutions, we offer staff outsourcing and team augmentation services to provide specialized expertise and additional resources for businesses without the need for permanent hires. We provide flexible staffing solutions tailored to your needs, whether it's short-term or long-term projects. With ongoing support and seamless integration, let us help you achieve your business goals with top-notch staffing solutions.";
  return (
    <div>
       <Service2Props
        header={header}  
        subheader={subheader}
        paragraph={paragraph}
        paragraph2={paragraph2}
      />
    </div>
  )
}

export default Staffing2
