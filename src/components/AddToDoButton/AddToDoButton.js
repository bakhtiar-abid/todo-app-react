import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import api from "../../../src/Api/useAxios";
import "./AddToDoButton.css";

import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const AddToDoButton = () => {
   const [modalShow, setModalShow] = React.useState(false);
   const [rerender, setRerender] = useState(0);
   const [error, setError] = useState("");

   useEffect(() => {}, [rerender]);

   const handleForm = useFormik({
      initialValues: {
         title: "",
         note: "",
         start_date: "",
         end_date: "",
         start_time: "",
         end_time: "",
      },
      onSubmit: (values) => {
         var d = new Date(values.start_date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

         if (month.length < 2) month = "0" + month;
         if (day.length < 2) day = "0" + day;

         values.start_date = [day, month, year].join("-");

         var d1 = new Date(values.end_date),
            month1 = "" + (d1.getMonth() + 1),
            day1 = "" + d1.getDate(),
            year1 = d1.getFullYear();

         if (month1.length < 2) month1 = "0" + month1;
         if (day1.length < 2) day1 = "0" + day1;

         values.end_date = [day1, month1, year1].join("-");

         if (
            values.title !== "" &&
            values.note !== "" &&
            values.start_date !== "" &&
            values.end_date !== "" &&
            values.start_time !== "" &&
            values.end_time !== ""
         ) {
            api.post("/todo/create", values).then((res) => {
               if (res.data.success === true) {
                  Swal.fire(
                     "Success!",
                     `New ToDo has been added! `,
                     "success"
                  ).then((res) => {
                     //   history.push("/dashboard");
                  });
                  //    setShow(false);
                  setError("");
                  handleForm.resetForm();
                  setModalShow(false);
                  setRerender(rerender + 1);
               }
            });
            console.log(JSON.stringify(values));
         } else if (values.title === "") {
            setError("Title is required! ");
         } else if (values.note === "") {
            setError("Note is required! ");
         } else if (values.start_date === "") {
            setError("Start Date is required! ");
         } else if (values.end_date === "") {
            setError("End Date is required! ");
         } else if (values.start_time === "") {
            setError("Start Time is required! ");
         } else if (values.end_time === "") {
            setError("End Time is required! ");
         }
      },
      enableReinitialize: true,
   });

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

         <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter ">
                  <div style={{ marginLeft: "320px" }}>
                     <span className="fw-bold"> Add ToDo </span>
                  </div>
                  <span className="text-danger">{error}</span>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form onSubmit={handleForm.handleSubmit}>
                  <div>
                     <div class="input-group mb-3">
                        <input
                           type="text"
                           class="form-control"
                           placeholder="Write task title"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           value={handleForm.values.title}
                           onChange={handleForm.handleChange}
                           name="title"
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
                           value={handleForm.values.note}
                           onChange={handleForm.handleChange}
                           name="note"
                        ></textarea>
                     </div>
                  </div>
                  <div className="d-flex ">
                     <div
                        class="input-group mb-3"
                        style={{ marginRight: "32px" }}
                     >
                        <input
                           type="date"
                           class="form-control"
                           placeholder="Start date"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           value={handleForm.values.start_date}
                           onChange={handleForm.handleChange}
                           name="start_date"
                        />
                     </div>

                     <div class="input-group mb-3">
                        <input
                           type="time"
                           class="form-control"
                           placeholder="Start Time"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           value={handleForm.values.start_time}
                           onChange={handleForm.handleChange}
                           name="start_time"
                        />
                     </div>
                  </div>
                  <div className="d-flex">
                     <div
                        class="input-group mb-3"
                        style={{ marginRight: "32px" }}
                     >
                        <input
                           type="date"
                           class="form-control"
                           placeholder="End date"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           value={handleForm.values.end_date}
                           onChange={handleForm.handleChange}
                           name="end_date"
                        />
                     </div>
                     <div class="input-group mb-3">
                        <input
                           type="time"
                           class="form-control"
                           placeholder="End Time"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           value={handleForm.values.end_time}
                           onChange={handleForm.handleChange}
                           name="end_time"
                        />
                     </div>
                  </div>
                  <button className="addTodo-button pointer d-flex justify-content-center align-items-center container my-4">
                     <span className="text-white">Add</span>
                  </button>
               </form>
            </Modal.Body>
         </Modal>
      </div>
   );
};

export default AddToDoButton;
