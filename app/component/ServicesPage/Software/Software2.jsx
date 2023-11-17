import React from 'react'
import Service2Props from '../ServicesProps/Service2Props'

const Software2 = () => {
    const header = "Software Product Development";

    const subheader =
      "We Bring Your Business Vision to Life and Give Competitive Edge to Your Software Products";
    const paragraph =
      "Software product development is the process of designing, creating, testing, and launching software products that are intended with a focus on meeting the needs of a specific market or audience.";
  
    const paragraph2 =
      "As a leading software product development company, we are committed to delivering exceptional software products and services that enable our clients to transform their business operations and achieve sustainable growth in the digital age. Our expertise spans across various industries, including healthcare, finance, education, e-commerce, and more.";
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

export default Software2
