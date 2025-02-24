import React from "react";
import thub from "../../images/thub.png";
import { CContainer } from "@coreui/react";
const CTHub = () => {
  return (
    <CContainer fluid>
      {/* MeeSeva Content */}
      <div className="col-sm-12 m-top d-flex justify-content-center align-items-center">
        <img
          className="card-img-top"
          src={thub}
          style={{ width: "65px" }}
          alt="meeseva"
        />
        <h3 className="ml-3 in-txt">T-Hub</h3>
      </div>
    </CContainer>
  );
};

export default CTHub;
