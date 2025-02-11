import React from "react";
import MainCarousel from "../../components/homeCarosel/MainCarosel";
import HomSection from "../../components/homeSection/HomSection";
const HomePage = () => {
  return (
    <div className="bg-white bg-opacity-80">
      <div>
        <MainCarousel />
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center">
        <HomSection sectionTitle={"SẢN PHẨM ĐÃ XEM"} />
        <HomSection sectionTitle={"ĐIỆN THOẠI"} />
        <HomSection sectionTitle={"LAPTOP"} />
        <HomSection sectionTitle={"MÁY TÍNH BẢNG"} />
        <HomSection sectionTitle={"MÁY TÍNH BÀN - DESKTOP"} />
      </div>
    </div>
  );
};

export default HomePage;
