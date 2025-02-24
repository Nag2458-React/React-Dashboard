import React from "react";
import cm3 from "../../images/task.png";
import { CContainer } from "@coreui/react";
const CTask = () => {
  return (
    <CContainer fluid>
      {/* MeeSeva Content */}
      <div className="col-sm-12 m-top d-flex justify-content-center align-items-center">
        <img
          className="card-img-top"
          src={cm3}
          style={{ width: "65px" }}
          alt="meeseva"
        />
        <h3 className="ml-3 in-txt">Task</h3>
      </div>
    </CContainer>
  );
};

export default CTask;
