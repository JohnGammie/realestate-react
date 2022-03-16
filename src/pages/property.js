import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HeadingSummary from "../components/PropertyPage/HeadingSummary";
import "./pages.css";
import image1 from "../images/home-search.jpg";

const Property = () => {
  const [searchParams] = useSearchParams();
  const [responseData, setResponseData] = useState();
  const id = searchParams.get("id");

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    await fetch(
      process.env.REACT_APP_API_URL + "/search" + "/property" + `/${id}`,
      {
        header: {
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponseData(data);
      });
  };

  if (responseData) {
    return (
      <div>
        <HeadingSummary
          address={responseData.address}
          price={responseData.price}
          image1={image1}
          image2={image1}
          image3={image1}
        ></HeadingSummary>
        <div className="sections">
          <div className="section">
            <div className="MainColumn" style={{ display: "flex" }}>
              <div className="bodyContent">
                <ul>
                  <li>propertyTitle (need to add database)</li>
                  <li>propertyContent (need to add database)</li>
                  <li>
                    property features section.(Random 3 of X features [just keep
                    it all front end?], use an svg)
                  </li>
                </ul>
              </div>
              <div className="AgentCard">Agent John Doe</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default Property;
