import React from "react";
import { CContainer, CRow, CCol, CButton, CFormSelect } from "@coreui/react";
const CMTable1 = () => {
  const userData = [
    { text: "No of Departments", count: "54" },
    { text: "No. of Services", count: "48" },
    { text: "No. of Centers", count: "48" },
  ];
  return (
    <>
      <CContainer fluid>
        <CRow>
          <CCol sm={6}>
            <CRow>
              {userData.map((item, index) => {
                return (
                  <CCol sm={4}>
                    <div className="m-box">
                      <p>{item.text}</p>
                      <span>{item.count}</span>
                    </div>
                  </CCol>
                );
              })}

              <CCol sm={4}></CCol>
              <CCol sm={4}></CCol>
            </CRow>
          </CCol>
          <CCol sm={6}>hxfdhrf</CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default CMTable1;
