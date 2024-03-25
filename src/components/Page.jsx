import React, { useContext } from "react";



import Header from "./Header";
import LelfSidever from "./LelfSidever";
import MovieList from "../cine/MovieList";
import Footer from "./Footer";
import { ThemContext } from "../Context";

const Page = () => {
  const {drakMode} = useContext(ThemContext)
  return (
    <div className={` h-full w-full ${drakMode ? "dark" : "" }`}>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <LelfSidever></LelfSidever>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Page;
