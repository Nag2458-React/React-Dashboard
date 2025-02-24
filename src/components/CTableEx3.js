import React from "react";
import { CTable, CRow, CCol } from "@coreui/react";
import chart from "../images/chart1.png";
export const CTableEx3 = () => {
  const items = [
    {
      id: 1,
      class: "Approved",
      heading_1: "90,24,729",

      // Add N/A when data is missing
    },
    {
      id: 2,
      class: "Rejected",
      heading_1: "6,50,306",
    },
    {
      id: 3,
      class: "Pending",
      heading_1: "3,70,300", // Add N/A when data is missing
    },
  ];

  return (
    <CRow>
      <CCol sm="8" className="d-flex justify-content-start">
        <CTable className="MTable MT3">
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {/* Display 2 td's per row */}
                <td>{item.class}</td>
                <td>{item.heading_1}</td>
              </tr>
            ))}
          </tbody>
        </CTable>
      </CCol>
      <CCol sm="4" className="d-flex justify-content-start">
        <img src={chart} className="chart" alt="logo" />
      </CCol>
    </CRow>
  );
};

export default CTableEx3;
