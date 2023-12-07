import { offers } from "../constant";
import { OfferCard } from "../components";

function Offers (){
    const offerCard = offers.map((offer, index) =>{
        return <OfferCard {...offer} key={index} />
    });
    return (
        <section className="max-container min-h-screen padding-x bg-tertiary-1100 flex flex-col gap-y-[4rem] justify-center pt-16 ">
            <h4 className="font-gfs-didot text-heading-four lg:text-heading-one text-tertiary-100 font-normal uppercase">
                walkway offers
            </h4>
            <div className="flex flex-wrap gap-[1.6rem] lg:gap-[2.4rem]">
                {offerCard}
            </div>
        </section>
    );
}

export default Offers;