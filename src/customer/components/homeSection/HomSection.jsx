import React from "react";
import HomSectionCarosel from "../homeSectionCarosel/HomSectionCarosel";

const HomSection = ({ sectionTitle }) => {
  return (
    <div className="mx-75">
      <h2 className="font-bold text-xl">{sectionTitle}</h2>
      <HomSectionCarosel />
    </div>
  );
};

export default HomSection;
