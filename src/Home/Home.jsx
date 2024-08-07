import React from "react";
import Cards from "../Components/Cards";
import { ProductData } from "../Components/ProductData";

const Home = () => {

  console.log(ProductData)
  return (
    <div>
      <h1>Our Products</h1>
      <div className="card_parent">

      {ProductData.map((e, i) => {
        return (
          <Cards key={i} id = {e.id} title={e.title} desc = {e.description} price={e.price} img={e.image}/>
        );
      })}
      </div>
    </div>
  );
};

export default Home;