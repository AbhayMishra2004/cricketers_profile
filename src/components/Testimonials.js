import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


const Testimonials = (props) => {

    let reviews = props.reviews ;
    const sizeOfReviewsList = reviews.length ; 

    const [index , setIndex] = useState(0) ;


    // LEFT SHIFT HANDLER 
    function leftShiftHandler()
    {   
        if(index === 0)
        {
            setIndex(sizeOfReviewsList-1) ;
        }

        else
        {
            setIndex(index - 1 ) ; 
        }
    }

    // RIGHT SHIFT HANDLER 
    function rightShiftHandler()
    {
        if(index === sizeOfReviewsList-1)
        {
            setIndex(0) ; 
        }

        else
        {
            setIndex(index + 1) ; 
        }
    }

    // SUPRISE HANDLER
    function supriseHandler()
    {
        let randomIndex = Math.floor(Math.random() * sizeOfReviewsList) ; 
        setIndex(randomIndex) ;
    }

    return (

        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md ">
            <Card review={reviews[index]} /> 

            {/* BUTTON FOR SLIDER */}
            <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
                 
                <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft  />
                </button>

                <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight  />
                </button>
            </div>

             {/* SUPRISE ME BUTTON */}
            <div onClick={supriseHandler} className="mt-6">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise me</button>
            </div>

        </div>
    )


}

export default Testimonials ; 