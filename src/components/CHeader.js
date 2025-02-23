import React from 'react';
import cm from '../images/cm.png';
import img1 from '../images/dpcm.png';
import img2 from '../images/tslogo.png';
import img3 from '../images/ts-rising.png';
import img4 from '../images/mn.png';
import { CIcon } from '@coreui/icons-react';
import { cilHome } from '@coreui/icons';
import { CContainer, CRow, CCol,CButton, CFormSelect } from '@coreui/react'; // Use CFormSelect instead of CSelect

function CHeader() {
  return (
    <div className="App">
      <header className="Top-header">
        <CContainer fluid>
          
          <CRow>
            
            <CCol sm="2" className="d-flex justify-content-center">
              <img src={cm} className="App-logo" alt="logo" />
            </CCol>

            
            <CCol sm="1" className="d-flex justify-content-start">
              <img src={img1} className="App-logo" alt="logo" style={{height:'90px'}}/>
            </CCol>

            {/* Third Image with Heading - aligned to the left */}
            <CCol sm="6" className="d-flex justify-content-start align-items-center">
              <img src={img2} className="App-logo" alt="logo" />
              <h3 className="ml-3">Daksha - Minister Dashboard Unified Digital Governance</h3>
            </CCol>

            {/* Fourth Image centered */}
            <CCol sm="1" className="d-flex justify-content-center">
              <img src={img3} className="App-logo" alt="logo" />
            </CCol>

            {/* Fifth Image aligned to the right */}
            <CCol sm="2" className="d-flex justify-content-end">
              <img src={img4} className="App-logo" alt="logo" />
            </CCol>
          </CRow>

         
        </CContainer>

      </header>
      <CContainer fluid>
         {/* Second Row - List */}
         <div className='bottom-sec'>
         <CRow>
            <CCol sm="12">
              {/* UL List */}
              <ul className="list-unstyled d-flex justify-content-between">
                {/* List Item 1 (left aligned by default) */}
                <li><CIcon icon={cilHome} size="xl"/></li>

                {/* List Item 2 (right aligned) */}
                <li className="ms-auto 2nd"><CButton color="warning">Beta</CButton></li>

                {/* List Item 3 (right aligned with a select dropdown) */}
                <li className="ml-auto 3rd">
                  <CFormSelect>
                    <option value="option1">User</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </CFormSelect>
                </li>
              </ul>
            </CCol>
          </CRow>
          </div>
      </CContainer>
    </div>
  );
}

export default CHeader;
