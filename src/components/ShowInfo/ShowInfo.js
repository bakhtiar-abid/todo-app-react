import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ShowInfo.css"
import edit from "../../assets/icons/edit-icon.svg"
import deleteIcon from "../../assets/icons/delete.svg"
import checkBox from "../../assets/icons/Necessery Icons.svg"

const ShowInfo = () => {
   return (
      <div className="card-info container">
         <div className="p-3 d-flex  d-flex justify-content-between">
            <div>
               <h1 className="text-title fw-semibold">This is the Title</h1>
               <p className="note">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  est senectus est...
               </p>
               <p className="start-time">
                  Start Date: 14 Sep at 11:00 AM - 17 Sep at 02:00 PM
               </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
               <div
                  style={{
                     paddingRight: "15px",
                  }}
                  className="error"
               >
                  {/* <label className="containerr">
                     <input type="checkbox"></input>
                     <span className="checkmark">
                        <img src={checkBox} alt="" />
                     </span>
                  </label> */}
                  <input
                     style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "10px",
                        outline: "2px solid #007BEC",
                     }}
                     type="checkbox"
                     id="vehicle1"
                     name="vehicle1"
                     value="Bike"
                  ></input>
               </div>
               <div
                  style={{
                     paddingRight: "15px",
                  }}
               >
                  <img className="" src={edit} alt="" />{" "}
               </div>
               <div>
                  <img src={deleteIcon} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShowInfo;
