import React from "react";


const ServicePageWrapper = ({ children }) => {
  return (
    <div >
      <div className={`d-flex flex-row justify-content-between  container`}>
        {children}
      </div>
    </div>
  );
};

export default ServicePageWrapper;
