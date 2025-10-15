import React from "react";
import Service7Props from "../ServicesProps/Service7Props";
import Group from "../../../../public/images/Group.svg";

const Staffing7 = () => {
  const header = "Our Tech Stacks";
  const subHeader =
    "We are a one-stop technology solution provider for startups and businesses";
  const paragraph =
    " We employ the latest languages, frameworks and technologies to ensure security, scalability and speed. We are well-equipped to deliver cross-that are convenient for all users and work for all devices.";
  const initial = "View Our Services";
  return (
    <div>
      <Service7Props
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        initial={initial}
        Group={Group}
      />
    </div>
  );
};

export default Staffing7;
