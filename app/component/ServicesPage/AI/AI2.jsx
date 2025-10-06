import React from 'react'
import Service2Props from "../ServicesProps/Service2Props";

const Ai2 = () => {
    const header = "Artifical Intelligence Development & Integration";

    const subheader =
      "We Can Manage your system integration and bring disparate systems together";
    const paragraph =
      "AI means Artifical Intelligence. AIs are sets of protocols that enable different software systems to connect and share data.";
  
    const paragraph2 =
      "At Lampnets Solutions, we offer comprehensive AI development and integration services to help businesses streamline their operations and improve efficiency. Our team of experts has extensive experience in building custom APIs that fit your business requirements, whether you need to integrate with third-party systems, automate tasks, or enhance the customer experience.";
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

export default Ai2
