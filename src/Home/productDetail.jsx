import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../Components/ProductData";
import Cards from "../Components/Cards";

const ProductDetail = () => {
  const { id } = useParams();

  console.log(id);

  const displayNone = {
    display: 'none'
  }

  const filterData = ProductData.filter((e, i) => {
    return e.id == id;
  });
  return (
    <div>
      <h1>Product Detail</h1>
      {filterData.map((e, i) => {
        return (
          <Cards
            key={i}
            id={e.id}
            title={e.title}
            desc={e.description}
            price={e.price}
            img={e.image}
            display={displayNone}
          />
        );
      })}
    </div>
  );
};

export default ProductDetail;