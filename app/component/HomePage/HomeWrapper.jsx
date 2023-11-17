"use client"
import React, {useState} from "react";
import HomePageWrapper from "./HomePageWrapper";
import HomePage11 from "./HomePage11";
import HomePage11a from "./HomePage11a";

const HomeWrapper = () => {
    const [selectedCardData, setSelectedCardData] = useState(null);


    const handleCardClick = (data) => {
      setSelectedCardData(data);
    };

  return (
    <HomePageWrapper>
      <HomePage11 onCardClick={handleCardClick}/>
      <HomePage11a selectedCardData={selectedCardData}/>
    </HomePageWrapper>
  );
};

export default HomeWrapper;
  