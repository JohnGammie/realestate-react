import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
        <div
          className="top"
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
        >
          <div className="left">
            <div className="address">
              {responseData.address.streetNumber},
              {responseData.address.streetName} ,{" "}
              {responseData.address.suburb.name} ,{" "}
              {responseData.address.suburb.state} ,{" "}
              {responseData.address.suburb.postcode}
            </div>
            {responseData.price}
            <button>Contact Agent</button>
          </div>
          <div className="Images">Images</div>
        </div>
        <div className="MainColumn" style={{ display: "flex" }}>
          <div className="bodyContent">
            <ul>
              <li>propertyTitle (need to add database)</li>
              <li>propertyContent (need to add database)</li>
              <li>
                property features section.(Random 3 of X features [just keep it
                all front end?], use an svg)
              </li>
            </ul>
          </div>
          <div className="AgentCard">Agent John Doe</div>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default Property;
