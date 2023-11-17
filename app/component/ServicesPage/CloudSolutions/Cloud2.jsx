import React from "react";
import Service2Props from "../ServicesProps/Service2Props";

const Cloud2 = () => {
  const header = "Cloud Solutions & Management";

  const subheader =
    "We Ensure That Data Security and Performance Are Optimized Across Cloud Environments";
  const paragraph =
    "Cloud solution & Management refers to the processes & tools used to manage the delivery of computing resources, including servers, storage, databases, software, and analytics, over the Internet.";

  const paragraph2 =
    "Managing and protecting your data can be complex, but with Lampnets’ cloud solution and management services, it doesn't have to be. We offer comprehensive services to move your enterprise infrastructure to cloud platforms such as Azure, and Google, to help your business conquer the challenges of cloud management and ensure the safety of your data ";
  return (
    <div>
      <Service2Props
        header={header}  
        subheader={subheader}
        paragraph={paragraph}
        paragraph2={paragraph2}
      />
    </div>
  );
};

export default Cloud2;
