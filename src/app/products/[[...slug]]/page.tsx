"use client";
import { notFound } from "next/navigation";
import React from "react";

interface ProductId {
  id?: number;
}

const ProductPage = ({ params }: { params: { slug: string } }) => {
  console.log("🚀 ~ ProductPage ~ params:", params);
  if(params.slug?.length >2){
    notFound()
  }
  if (params.slug?.length === 2) {
    return (
      <h2>
        Products {params.slug[0]} for {params.slug[1]}
      </h2>
    );
  } else if (params.slug?.length === 1) {
    return <h2>Products {params.slug[0]} </h2>;
  } else return <h2>Products </h2>;
};
export default ProductPage;
