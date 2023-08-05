import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
  let review = props.review;

//   console.log(review);

  return (
    <div className="flex flex-col md:relative">

      {/* IMAGES OF THE CARD  */}
      <div className="absolute top-[-7rem] z-[10] mx-auto ">
        <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-[25] " />
      </div>

      {/* NAME AND JOB OF THE CARD */}
      <div className="text-center mt-7">
        <p className="tracking-wider font-bold text-2xl capitalize">{review.name}</p>

        <p className="text-violet-400 mx-auto mt-5">{review.job}</p>
      </div>


      {/* QUOTES LEFT ICON */}
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      {/* QUOTES */}
      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      {/* QUOTES RIGHT ICON */}
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
