/** @format */

import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

// import BottomPanel from "./images/dome/Bottom_panel.jpg";
// import DoorPanel from "./images/dome/Door_size_panels.jpg";
// import RiserPanel from "./images/dome/Riser_Panel.jpg";
// import RoofPanel from "./images/dome/Roof_panel.jpg";
// import SidePanel from "./images/dome/Side_panel.jpg";

const ItemContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 150px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    height: auto;
  }
`;

const ItemImage = styled.img`
  /* border: 1px solid blue; */
  width: 30%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #163e98;

  @media (max-width: 991px) {
    width: 90%;
    height: 220px;
    margin: 0 auto;
  }
`;

const DescriptionPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  /* border: 1px solid red; */

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ItemDescription = styled.div`
  /* border: 1px solid yellow; */
  width: 70%;
  // height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */

  @media (max-width: 991px) {
    width: 50%;
  }
`;

const ItemTitleh3 = styled.h3`
  font-size: 1.1rem;
  border-bottom: 1px solid grey;

  @media (max-width: 991px) {
    font-size: 0.9rem;
    margin-top: 15px;
  }
`;

const StandardTextP = styled.p`
  font-size: 0.9rem;

  @media (max-width: 991px) {
    font-size: 0.7rem;
  }
`;

const ItemAlsoAvailableDiv = styled.div`
  font-size: 0.7rem;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemPriceDiv = styled.div`
  /* border: 1px solid green; */
  width: 30%;
  height: 150px;
  display: ${props => (props.showing !== null ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  /* padding-top: 30px; */

  @media (max-width: 991px) {
    font-size: 0.7rem;
    width: 50%;
  }
`;

const AlsoAvailableItemPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
  padding-top: 30px;
  font-size: 0.7rem;

  @media (max-width: 991px) {
    /* font-size: 0.55rem; */
  }
`;

const PriceLoginDiv = styled.div`
  /* border: 1px solid grey; */
  width: 30%;
  // height: 150px;
  display: ${props => (props.showing === null ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    font-size: 0.7rem;
    width: 50%;
  }
`;

const DomeShop = props => {
  const { setSignIn, cageData } = props;
  const [cagePartNames] = useState([
    "Door",
    "Bottom",
    "Side",
    "Riser",
    "Roof",
    "Low Riser",
    "High Riser",
    "Low Roof",
    "High Roof",
  ]);
  const [sortedParts, setSortedParts] = useState([]);
  const sortFilteredData = useRef(function () {
    let sortedFilter = [];
    for (let name in cagePartNames) {
      let filtered = domeCageData.filter(part => {
        return part.cagePart === cagePartNames[name];
      });
      sortedFilter.push(filtered);
    }
    setSortedParts(sortedFilter);
  });

  const domeCageData = cageData.filter(cage => cage.cageType === "Dome");

  useEffect(() => {
    sortFilteredData.current();
  }, []);

  const cageDisplayCard = cagePartName => {
    return (
      <DescriptionPriceContainer>
        <ItemDescription>
          <ItemTitleh3>Dome {cagePartName} Panel</ItemTitleh3>
          <StandardTextP>Standard 18x14 Screen</StandardTextP>
          <ItemAlsoAvailableDiv>
            <span style={{ fontWeight: "bold" }}>Also Available:</span>

            {screenOptionsAvailable(cagePartName)}
          </ItemAlsoAvailableDiv>
        </ItemDescription>
        <ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
          <ItemTitleh3>Price/s</ItemTitleh3>
          <div>
            Standard - $
            {
              domeCageData.filter(cage => cage.cagePart === cagePartName)[0]
                .price
            }
          </div>
          <AlsoAvailableItemPriceDiv>
            {screenOptionsAvailable(cagePartName, true)}
          </AlsoAvailableItemPriceDiv>
        </ItemPriceDiv>
        <PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
          <div style={{ marginBottom: "10px", fontSize: ".8rem" }}>
            Login to view price
          </div>
          <Button type='button' onClick={() => setSignIn(true)}>
            Log in
          </Button>
        </PriceLoginDiv>
      </DescriptionPriceContainer>
    );
  };

  const screenOptionsAvailable = (partName, bPrices = false) => {
    if (!bPrices) {
      return domeCageData
        .filter(cage => cage.cagePart === partName)[0]
        .altScreenOptions.map(screen => {
          return <span key={screen.id}>{screen.altScreenName}</span>;
        });
    }

    if (bPrices) {
      return domeCageData
        .filter(cage => cage.cagePart === partName)[0]
        .altScreenOptions.map(screen => {
          return (
            <span key={screen.id}>
              {screen.altScreenName} - ${screen.price}
            </span>
          );
        });
    }
  };

  if (sortedParts.length === 0) {
    return <>Checking...</>;
  }

  return (
    <div>
      {sortedParts.map(part => {
        if (part.length > 0) {
          for (let item in part) {
            return (
              <Card
                key={part[item].id}
                style={{ padding: "10px 10px", margin: "5px 0" }}
              >
                <ItemContainer>
                  <ItemImage
                    src={part[item].imageURL}
                    alt={`${part[item].cageType} Pool Cage with Emphasis on ${part[item].cagePart} Panel`}
                    loading='lazy'
                  />
                  {cageDisplayCard(part[item].cagePart)}
                </ItemContainer>
              </Card>
            );
          }
        }
        return null;
      })}
    </div>
  );
};

export default DomeShop;
