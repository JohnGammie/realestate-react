import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HeadingSummary from "../components/PropertyPage/HeadingSummary";
import "./pages.css";
import image1 from "../images/home-search.jpg";
import BodyContent from "../components/PropertyPage/BodyContent";
import AgentCard from "../components/PropertyPage/AgentCard";

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
          agent={responseData.agent}
        ></HeadingSummary>
        <div className="sections">
          <div
            className="section"
            style={{
              display: "grid",
              gridTemplateColumns: "2.5fr 1fr",
              gap: "16px",
            }}
          >
            <BodyContent description={responseData.description} />
            <div>
              <AgentCard image1={image1} agent={responseData.agent} />
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
