import React, { useContext } from "react";
import remove from "../assets/delete.svg";
import { MovieContext } from "../Context";
import { getImgUrl } from "../utils/cine-Utiles";
import checkout from "../assets/icons/checkout.svg";
import { toast } from "react-toastify";

const CardDetels = ({ handleCloseCartDetels }) => {
  const { cartData, setCartData } = useContext(MovieContext);
  console.log(cartData);
  const handleDeletCart = (id) => {
    console.log("delet", id);
    const filtered = cartData.filter((item) => item.id !== id);
    setCartData([...filtered]);
    toast.error(`Deleted Movie`, {
      position: "top-center",
      autoClose: 2000,
    });
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {cartData.length === 0 ? (
              <span className="text-3xl text-red-600">Your Card is Emty?Please Added Card!</span>
            ) : (
              cartData.map((cart) => (
                <div key={cart.id} className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="rounded overflow-hidden"
                      src={getImgUrl(cart.cover)}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                    <div>
                      <h3 className="text-base md:text-xl font-bold">
                        {cart.title}
                      </h3>
                      <p className="max-md:text-xs text-[#575A6E]">
                        {cart.genre}
                      </p>
                      <span className="max-md:text-xs">${cart.price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <button
                      onClick={() => handleDeletCart(cart.id)}
                      className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white "
                    >
                      <img className="w-5 h-5" src={remove} alt="" />
                      <span className="max-md:hidden">Remove</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={checkout} width="24" height="24" alt="" />
              <span>Checkout</span>
            </a>
            <a
              onClick={handleCloseCartDetels}
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetels;
