import React from "react";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCol,
  CRow,
  CButton,
  CCardText,
} from "@coreui/react";
import cm2 from "../images/meeseva_logo2.png";
import cm3 from "../images/t-fiber-logo.png";
import task from "../images/task.png";
import thub from "../images/thub.png";
import { Link } from "react-router-dom"; // Import Link
import CTableEx from "../components/CTableEx";
import CTableEx2 from "../components/CTableEx2";
import CTableEx3 from "../components/CTableEx3";
export const Cards = ({ cardCount }) => {
  const cardsArray = Array.from({ length: cardCount }); // Generate the required number of cards based on cardCount prop
  // Array containing card data with routes for MeeSeva and T-Fiber
  const cards = [
    {
      id: 1,
      title: "MeeSeva",
      imgSrc: cm2,
      buttonColor: "primary",
      link: "/meeseva",
    },
    {
      id: 2,
      title: "T-Fiber",
      imgSrc: cm3,
      buttonColor: "success",
      link: "/tfiber",
    },
    { id: 3, title: "Task", imgSrc: task, buttonColor: "info", link: "/task" },
    {
      id: 4,
      title: "T-Hub",
      imgSrc: thub,
      buttonColor: "warning",
      link: "/thub",
    },
  ];

  // Slice the cards array based on the cardCount prop
  const cardsToDisplay = cards.slice(0, cardCount);

  return (
    <CRow>
      {/* Loop through the sliced cards array to render each card */}
      {cardsToDisplay.map((card) => (
        <CCol sm="3" key={card.id}>
          <CCard>
            <CCol
              sm="12"
              className="d-flex justify-content-start align-items-center"
            >
              <CCardImage
                orientation="top"
                src={card.imgSrc}
                style={{ width: "95px" }}
              />
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
            <Link to={card.link}>
              <CButton color={card.buttonColor}>View Dashboard</CButton>
            </Link>
          </CCard>
        </CCol>
      ))}
    </CRow>
  );
};

export default Cards;
