import React from "react";
import filters from "../images/filter.svg";
import {
  StyledSearchFilters,
  ModalHeading,
  ModalTabs,
  ModalTab,
  ModalSectionContainer,
  ModalSectionHeading,
} from "./styles/SearchFilters.styled";
import Modal from "react-modal";
import { useState } from "react";
import { useEffect } from "react";

const SearchFilters = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const generateRadioButton = (name, content) => {
    return (
      <div>
        <input type="radio" name={name} value={content} />
        <label>{content}</label>
      </div>
    );
  };

  // useEffect(() => {
  //   console.log(props.propertyType);
  // }, [props.propertyType]);

  // useEffect(() => {
  //   console.log(props.priceMin);
  // }, [props.priceMin]);

  // useEffect(() => {
  //   console.log(props.priceMax);
  // }, [props.priceMax]);

  return (
    <StyledSearchFilters>
      <div onClick={openModal}>
        <img src={filters} alt="filters" />
        <div>Filters</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalHeading>Filters</ModalHeading>
        {/* <ModalTabs>
          <ModalTab>Buy</ModalTab>
          <ModalTab>Rent</ModalTab>
          <ModalTab>Sold</ModalTab>
        </ModalTabs> */}
        <ModalSectionContainer>
          <ModalSectionHeading>Property Type</ModalSectionHeading>

          <div className="propertyTypeRadioButtons">
            {/* {generateRadioButton("propertyType", "House")}
            {generateRadioButton("propertyType", "Apartment & Unit")} */}

            <input
              type="radio"
              name="propertyType"
              id="Any"
              value="Any"
              checked={props.propertyType === "Any"}
              onChange={() => props.setPropertyType("Any")}
            />
            <label htmlFor="Any">Any</label>

            <input
              type="radio"
              name="propertyType"
              id="House"
              value="House"
              checked={props.propertyType === "House"}
              onChange={() => props.setPropertyType("House")}
            />
            <label htmlFor="House">House</label>

            <input
              type="radio"
              name="propertyType"
              value="Apartment &amp; Unit"
              id="ApartmentUnit"
              checked={props.propertyType === "Apartment & Unit"}
              onChange={() => props.setPropertyType("Apartment & Unit")}
            />
            <label htmlFor="ApartmentUnit">Apartment &amp; Unit</label>
          </div>
        </ModalSectionContainer>
        <ModalSectionContainer>
          <ModalSectionHeading>Price</ModalSectionHeading>
          <div className="price">
            <label htmlFor="priceMin">Min</label>
            <select
              name="priceMin"
              id="priceMin"
              onChange={(event) => props.setPriceMin(event.target.value)}
              value={props.priceMin}
            >
              <option value={0}>Any</option>
              <option value={200}>200</option>
              <option value={400}>400</option>
            </select>

            <label htmlFor="priceMax">Min</label>
            <select
              name="priceMax"
              id="priceMax"
              onChange={(event) => props.setPriceMax(event.target.value)}
              value={props.priceMax}
            >
              <option value={0}>Any</option>
              <option value={200}>200</option>
              <option value={400}>400</option>
            </select>
          </div>
        </ModalSectionContainer>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </StyledSearchFilters>
  );
};

export default SearchFilters;
