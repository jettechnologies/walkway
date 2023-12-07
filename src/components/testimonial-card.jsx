/* eslint-disable react/prop-types */
// import { arrowLeft, arrowRight } from "../assets/icons";

function TestimonialCard({ customerName, customerRemark, customerImg}){

    // const {prev, next} = carouselFunction;

    return(
        <div 
            className="flex-1 min-w-full flex flex-col md:flex-row gap-y-6 md:gap-x-[2rem] lg:gap-x-[3rem] shadow-xl shadow-secondary-1000/50">
            <img src={customerImg} alt="customer image" className="w-full md:w-[270px] lg:w-2/5 max-xs:h-72 object-cover object-top" />
            <div className="flex flex-col lg:self-center gap-y-[2.4rem] lg:gap-y-[4rem] pb-16 px-2">
                <div className=" flex-1 flex flex-col gap-y-6">
                    <h5 className="font-dancing-script font-normal leading-[1.4em] text-[2.4rem] lg:text-[4rem] text-tertiary-800 capitalize">
                        {customerName}
                    </h5>
                    <p className="font-normal lg:font-medium text-large lg:text-x-large font-exo text-tertiary-100">
                        {customerRemark}
                    </p>
                </div>
                {/* <div className="flex gap-x-10">
                    <button
                        className="p-1 lg:p-2 rounded-full shadow bg-tertiary-1000"
                        // onClick={prev}
                    >
                        <img src={arrowLeft} alt="arrow left icon" />
                    </button>
                    <button
                        className="p-1 lg:p-2 rounded-full shadow bg-tertiary-1000"
                        // onClick={next}
                    >
                        <img src={arrowRight} alt="arrow right icon" />
                    </button>
                </div> */}

                {/* <div className="h-24 w-72 relative border-2 border-white"></div> */}
            </div>
        </div>
    );
}

export default TestimonialCard;