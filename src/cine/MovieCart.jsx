import React, { useContext, useState } from "react";
import { getImgUrl } from "../utils/cine-Utiles";
import Rating from "./Rating";
import MovieDetels from "./MovieDetels";
import { MovieContext } from "../Context";
import { toast } from "react-toastify";

const MovieCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartData, setCartData } = useContext(MovieContext);

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCartData([...cartData, movie]);
      toast.success(`Movie ${movie.title} added successfully`, {
        position: "top-center",
        autoClose: 1000,
      });
      // toast.success("🦄 Wow so easy!");
    } else {
      toast.error(`Movie ${movie.title} added added alredy`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handldClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    console.log(movie);
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieDetels
          movie={selectedMovie}
          onClose={handldClose}
          onCardAdd={handleAddToCart}
        ></MovieDetels>
      )}

      <figure
        onClick={() => setShowModal(true)}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <button onClick={() => handleMovieSelection(movie)} href="">
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating}></Rating>
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </button>
      </figure>
    </>
  );
};

export default MovieCart;
