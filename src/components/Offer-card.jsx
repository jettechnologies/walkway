/* eslint-disable react/prop-types */
function OfferCard ({img, text}){

    return (
        <div className="flex-auto xl:max-w-[300px] xl:flex-1 lg:flex-[1 1 30%]">
            <img src={img} alt="offer image" className="bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)] object-cover w-full h-64" />
            <p className="text-center font-exo text-base lg:text-large font-normal text-tertiary-800 mt-5">
                {text}
            </p>
        </div>
    );
}

export default OfferCard;