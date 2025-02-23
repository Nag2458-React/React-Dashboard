import React from 'react'
import {
  CCard,
  CCardBody,
  CCardImage,
  CCol,
  CRow,
  CButton,
  CCardText,
} from '@coreui/react'
import cm2 from '../images/meeseva_logo2.png';
import cm3 from '../images/t-fiber-logo.png';
import task from '../images/task.png';
import CTableEx from './CTableEx';
import CTableEx2 from './CTableEx2';
import CTableEx3 from './CTableEx3';
import thub from '../images/thub.png';

export const Cards = () => {
  // Array containing card data
  const cards = [
    { id: 1, title: 'MeeSeva', imgSrc: cm2, buttonColor: 'primary' },
    { id: 2, title: 'T-Fiber', imgSrc: cm3, buttonColor: 'success' },
    { id: 3, title: 'Task', imgSrc: task, buttonColor: 'info' },
    { id: 4, title: 'T-Hub', imgSrc: thub, buttonColor: 'warning' },
  ];

  return (
    <CRow>
      {/* Loop through the card data array to render each card */}
      {cards.map((card) => (
        <CCol sm="3" key={card.id}>
          <CCard>
            <CCol sm="12" className="d-flex justify-content-start align-items-center">
              <CCardImage orientation="top" src={card.imgSrc} style={{ width: '95px' }} />
              <h3 className="ml-3">{card.title}</h3>
            </CCol>
            <CCardBody>
              <hr />
              <CCardText>
                <CTableEx />
                <hr />
                <CTableEx2 />
                <hr />
                <CTableEx3 />
              </CCardText>
            </CCardBody>
            <CButton color={card.buttonColor} href="#">
              View Dashboard
            </CButton>
          </CCard>
        </CCol>
      ))}
    </CRow>
  );
};

export default Cards;
