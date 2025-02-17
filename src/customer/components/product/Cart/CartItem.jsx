import { CheckBox } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const CartItem = () => {
  return (
    <div className="flex flex-wrap justify-start my-3 ">
      <div className="flex items-center justify-start py-7 px-5 rounded-xl border shadow-2xl h-auto w-auto">
        <IconButton>
          <CheckBox />
        </IconButton>
        <div className="flex flex-wrap justify-center items-center border border-red-600 mx-5">
          <div className="flex justify-center items-center">
            <img
              className="w-[5rem] h-[5rem] lg:w-[7rem] lg:h-[7rem]"
              src="https://res.cloudinary.com/dwif85oqc/image/upload/v1739308452/ecommerce/images/product/oxqbtf7gzrlxku2qwbf4.jpg"
              alt="30-jeans-kneecut-black-cristhaliy2-fashion"
            />
          </div>
          <div className=" space-y-1 flex flex-col border border-black">
            <p className="font-semibold">iPhone Pro Max 256GB</p>
            <p className="font-semibold">Màu gold</p>
            <p className="opacity-70 text-sm ">Giá gốc</p>
            <p className="opacity-70 text-sm">Giá khuyến mãi</p>
            <p className="text-sm text-red-600">-7%</p>
          </div>
        </div>
        <div className="lg:flex lg:items-center lg:space-x-10 p-4 justify-center">
          <div className="flex items-center space-x-2 border">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">1</span>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="flex items-end">
            <Button className="flex justify-center">
              <DeleteOutlinedIcon sx={{ color: "RGB(215 47 23)" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
