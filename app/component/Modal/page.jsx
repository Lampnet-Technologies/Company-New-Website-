import React from "react";
import classes from "./Modal.module.css";

const ModalPage = () => {
  return (
    <div
      class={`modal fade ${classes.Modalparent}`}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class={`modal-dialog  modal-dialog-centered ${classes.ModalChild}`}>
        <div class={`modal-content ${classes.ModalBro}`}>
          <div class={`modal-header${classes.ModalSis} `}>
            <h5 class={`modal-title${classes.ModalCousin} `}>
              Book An Appointment With Us
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {/* <Form width={"100%"} margin="0 auto" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
