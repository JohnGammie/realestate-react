import React from "react";
import filters from "../images/filter.svg";
import {
  StyledSearchFilters,
  ModalHeading,
  ModalTabs,
  ModalTab,
  ModalSectionContainer,
  ModalSectionHeading,
  ModalFooter,
  StyledModalDropdown,
} from "./styles/SearchFilters.styled";
import Modal from "react-modal";
import { useState } from "react";
import { currencyFormatter } from "../helpers/currencyFormatter";

const SearchFilters = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const tabNames = ["Buy", "Rent", "Sold"];
  const [activeTabName, setActiveTabName] = useState(tabNames[props.tab ?? 0]);

  const Tabs = () => {
    let tabCollection = [];
    tabNames.forEach((tabName, index) => {
      let styleOfActiveTab = () => {
        if (tabName === activeTabName) {
          return {
            borderBottom: "2px solid red",
            transition: "border-bottom 0.5s",
          };
        }
      };
      tabCollection.push(
        <ModalTab
          key={index}
          onClick={() => setActiveTabName(tabName)}
          style={styleOfActiveTab()}
        >
          {tabName}
        </ModalTab>
      );
    });
    return <>{tabCollection}</>;
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  };

  const generateRadioButton = (idLabel, content) => {
    return (
      <div className="radioButton">
        <input
          type="radio"
          id={idLabel}
          name="propertyType"
          value={content}
          checked={props.propertyType === content}
          onChange={() => props.setPropertyType(content)}
        />
        <label htmlFor={idLabel}>{content}</label>
      </div>
    );
  };

  const generatePriceOptions = () => {
    const generateData = (startValue, increment, count) => {
      let data = [startValue];
      for (let i = 0; i < count; i++) {
        data.push(startValue + increment * (i + 1));
      }
      return data;
    };
    // Based on tab selection populate the options
    let optionsCollection = [];
    const buyPriceData = generateData(100000, 50000, 10);
    const rentPriceData = generateData(200, 50, 10);

    if (activeTabName === "Rent") {
      rentPriceData.forEach((element, index) => {
        optionsCollection.push(
          <option key={index} value={element}>
            {currencyFormatter.format(element)}
          </option>
        );
      });
    } else {
      // Buy/Sold
      buyPriceData.forEach((element, index) => {
        optionsCollection.push(
          <option key={index} value={element}>
            {currencyFormatter.format(element)}
          </option>
        );
      });
    }

    return optionsCollection;
  };

  const clearFilters = () => {
    setActiveTabName(tabNames[props.tab ?? 0]);

    let priceMin = document.getElementById("priceMin");
    priceMin.selectedIndex = 0;
    props.setPriceMin(priceMin.selectedIndex);

    let priceMax = document.getElementById("priceMax");
    priceMax.selectedIndex = 0;
    props.setPriceMax(priceMax.selectedIndex);
  };

  return (
    <StyledSearchFilters>
      <div onClick={openModal}>
        <img src={filters} alt="filters" />
        <div>Filters</div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <ModalHeading>Filters</ModalHeading>
        <ModalTabs>{Tabs()}</ModalTabs>
        <ModalSectionContainer>
          <ModalSectionHeading>Property Type</ModalSectionHeading>
          <ul>
            {generateRadioButton("Any", "Any")}
            {generateRadioButton("House", "House")}
            {generateRadioButton("ApartmentUnit", "Apartment & Unit")}
          </ul>
        </ModalSectionContainer>
        <ModalSectionContainer>
          <ModalSectionHeading>Price</ModalSectionHeading>
          <ul>
            <StyledModalDropdown>
              <label htmlFor="priceMin">Min</label>
              <select
                name="priceMin"
                id="priceMin"
                onChange={(event) => props.setPriceMin(event.target.value)}
                value={props.priceMin}
              >
                <option value={0}>Any</option>
                {generatePriceOptions()}
              </select>
            </StyledModalDropdown>

            <StyledModalDropdown>
              <label htmlFor="priceMax">Max</label>
              <select
                name="priceMax"
                id="priceMax"
                onChange={(event) => props.setPriceMax(event.target.value)}
                value={props.priceMax}
              >
                <option value={0}>Any</option>
                {generatePriceOptions()}
              </select>
            </StyledModalDropdown>
          </ul>
        </ModalSectionContainer>
        <ModalFooter>
          <button onClick={() => clearFilters()}>Clear Filters</button>
          <button onClick={() => props.submitSearch(true, activeTabName)}>
            Search
          </button>
        </ModalFooter>
      </Modal>
    </StyledSearchFilters>
  );
};

export default SearchFilters;
