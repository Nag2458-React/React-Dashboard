import React from "react";
import { CContainer, CBreadcrumb, CBreadcrumbItem } from "@coreui/react"; // Import CBreadcrumb and CBreadcrumbItem
import { CIcon } from "@coreui/icons-react";
import { cilHome } from "@coreui/icons";
import CMTable1 from "../../components/meeseva/CMTable1";
const CMeeseva = () => {
  return (
    <>
      <CContainer fluid>
        {/* MeeSeva Content */}
        <div className="col-sm-12 m-top d-flex justify-content-center align-items-center">
          <img
            className="card-img-top"
            src="/static/media/meeseva_logo2.5f7df1036ca7480e5dcc.png"
            style={{ width: "65px" }}
            alt="meeseva"
          />
          <h3 className="ml-3 in-txt">MeeSeva</h3>
        </div>
        <div className="meseva-cont">
          <CMTable1 />
        </div>
      </CContainer>
    </>
  );
};

export default CMeeseva;
