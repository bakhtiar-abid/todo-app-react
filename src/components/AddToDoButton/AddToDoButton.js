import React from "react";

import "./AddToDoButton.css";

import { Modal } from "react-bootstrap";

const AddToDoButton = () => {
   const [modalShow, setModalShow] = React.useState(false);

   function MyVerticallyCenteredModal(props) {
      return (
         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter ">
                  <div style={{ marginLeft: "320px" }}>
                     <span className="fw-bold"> Add ToDo </span>
                  </div>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div>
                  <div class="input-group mb-3">
                     <input
                        type="text"
                        class="form-control"
                        placeholder="Write task title"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                     />
                  </div>
                  <div class="mb-3">
                     <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                     ></label>
                     <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Write task note"
                        rows="3"
                     ></textarea>
                  </div>
               </div>
               <div className="d-flex ">
                  <div class="input-group mb-3" style={{ marginRight: "32px" }}>
                     <input
                        type="text"
                        class="form-control"
                        placeholder="Start date"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                     />
                  </div>

                  <div class="input-group mb-3">
                     <input
                        type="text"
                        class="form-control"
                        placeholder="Start Time"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                     />
                  </div>
               </div>
               <div className="d-flex">
                  <div class="input-group mb-3" style={{ marginRight: "32px" }}>
                     <input
                        type="text"
                        class="form-control"
                        placeholder="End date"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                     />
                  </div>
                  <div class="input-group mb-3">
                     <input
                        type="text"
                        class="form-control"
                        placeholder="End Time"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                     />
                  </div>
               </div>
               <div className="addTodo-button pointer d-flex justify-content-center align-items-center container my-4">
                  <span className="text-white">Add</span>
               </div>
            </Modal.Body>
         </Modal>
      );
   }

   return (
      <div className="pb-3 " style={{ marginLeft: "69rem" }}>
         <div
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            className="button-detail pointer d-flex justify-content-center align-items-center container "
            onClick={() => setModalShow(true)}
         >
            <span className="text-white">Add ToDO </span>
         </div>

         <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
         />
      </div>
   );
};

export default AddToDoButton;
