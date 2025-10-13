import React from "react";
import classes from "./Modal.module.css";

const ModalPage = () => {
  return (
    <div
      className={`modal fade ${classes.Modalparent}`}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog  modal-dialog-centered ${classes.ModalChild}`}>
        <div className={`modal-content ${classes.ModalBro}`}>
          <div className={`modal-header${classes.ModalSis} `}>
            <h5 className={`modal-title${classes.ModalCousin} `}>
              Book An Appointment With Us
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* <Form width={"100%"} margin="0 auto" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
