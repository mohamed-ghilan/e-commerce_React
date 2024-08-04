import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenue from "../../components/ExploreMenu/ExploreMenue";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenue category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
