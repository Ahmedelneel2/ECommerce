import getProductDetails from "@/apis/getProductDetails";
import React from "react";

const ProductDetails = async ({ params }: { params: object }) => {
  const { data } = await getProductDetails(params.id);
  return (
    <div classname="flex  flex-row justify-center  align-center">
      <div className="w-1/3 bg-[red] ">
        <img
          className="m-2"
          src={data.imageCover}
          alt="image of product"
        ></img>
         <div className="productDetails bg-[yellow] flex text-center justify-center">
        <p className="line-clamp-1 text-center text-[black] font-bold">
          {data.slug}
        </p>
        <p className="line-clamp-1 text-center text-[black] font-bold ">
          {data.price} EGP
        </p>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
