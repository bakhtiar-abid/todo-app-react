import React, { useEffect, useState } from "react";
import "./ShowInfo.css"
import edit from "../../assets/icons/edit-icon.svg"
import deleteIcon from "../../assets/icons/delete.svg"
import api from "../../../src/Api/useAxios"


const ShowInfo = () => {

    

       const [details, setDetails] = useState([]);

       console.log(details);
   /* Fetching Data From Backend */
   useEffect(() => {
      api.get("/todo")
         .then((response) => {
            setDetails(response.data.data);
         })

         .catch((error) => {
            console.error("There was an error!", error);
         });
   }, []);


   return (
      <div className="">
        {
            details?.map((detail, index)=>{
                return (
                   <div key={index} className="py-2">
                      <div className="card-info container">
                         <div
                            className="p-3 d-flex  d-flex justify-content-between"
                         >
                            <div>
                               <h1 className="text-title fw-semibold">
                                  {detail?.title}
                               </h1>
                               <p className="note">{detail?.note}</p>
                               <p className="start-time">
                                  {` Start Date:
                                  ${new Date(detail?.start_date).getDate()} 
                                  ${new Date(detail?.start_date).toLocaleString(
                                     "en-us",
                                     { month: "short" }
                                  )}
                                  at ${new Date(
                                     `${detail?.start_date} ${detail?.start_time}`
                                  )
                                     .toLocaleTimeString()
                                     .replace(
                                        /([\d]+:[\d]{2})(:[\d]{2})(.*)/,
                                        "$1$3"
                                     )} - ${new Date(
                                     detail?.end_date
                                  ).getDate()} 
                                  ${new Date(detail?.end_date).toLocaleString(
                                     "en-us",
                                     { month: "short" }
                                  )} at ${new Date(
                                     `${detail?.end_date} ${detail?.end_time}`
                                  )
                                     .toLocaleTimeString()
                                     .replace(
                                        /([\d]+:[\d]{2})(:[\d]{2})(.*)/,
                                        "$1$3"
                                     )}`}
                               </p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                               <div
                                  style={{
                                     paddingRight: "15px",
                                  }}
                                  className="error pointer"
                               >
                                  <input
                                     style={{
                                        width: "20px",
                                        height: "20px",
                                        marginTop: "10px",
                                        outline: "2px solid #007BEC",
                                     }}
                                     type="checkbox"
                                     className="pointer"
                                  ></input>
                               </div>
                               <div
                                  style={{
                                     paddingRight: "15px",
                                  }}
                                  className="pointer"
                               >
                                  <img className="" src={edit} alt="" />{" "}
                               </div>
                               <div className="pointer">
                                  <img src={deleteIcon} alt="" />
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                );
            })
        }
       
      </div>
   );
};

export default ShowInfo;
