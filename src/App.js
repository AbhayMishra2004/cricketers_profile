import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    
    <div className="flex flex-col w-[100w] h-[100vh] justify-center items-center bg-gray-200 ">

      <div className="text-center" >

        {/* HEADING */}
        <h1 className="text-4xl font-bold"> Cricketers Profile </h1>

        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto "></div>

        <div>
          {/* Render the Testimonials component with the reviews data */}
          <Testimonials reviews={reviews} />
        </div>

      </div>

      

    </div>
  );
};

export default App ;
