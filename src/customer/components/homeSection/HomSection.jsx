import React from "react";
// import HomSectionCarosel from "../homeSectionCarosel/HomSectionCarosel";
import mockProductData from "../product/mockProductData";
import ProductCard from "../product/ProductCard";

const HomSection = ({ sectionTitle }) => {
  return (
    <div className="mx-75 border rounded-lg shadow-2xl">
      <div className="flex justify-between mt-3 mx-3">
        <h2 className="font-bold text-xl">{sectionTitle}</h2>
        <a href="#" className="text-blue-800 hover:text-blue-600">
          Xem tất cả...{" "}
        </a>
      </div>
      {/* <HomSectionCarosel /> */}
      <div className="flex flex-wrap justify-center items-center">
        {mockProductData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomSection;
