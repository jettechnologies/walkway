import { SwiperCarousel } from "../components";

function Spotlight (){
     
    return (
        <section className="relative max-container min-h-screen padding-x py-16 lg:py-24 bg-secondary-1100">
            <div className="max-w-full h-full grid items-center">
                <div className="h-fit w-fit">
                    <div className=" w-[77%] h-[2.4rem] lg:h-16 border-[1.6px] border-secondary-400 shadow-[0px 8px 16px 0px rgba(2, 1, 1, 0.16)]"></div>
                    <div className="mt-[-1.6rem] lg:mt-[-2.15rem] pl-[2.4rem] lg:pl-16">
                        <h4 className="font-gfs-didot text-heading-four lg:text-heading-one text-tertiary-100 font-normal uppercase">
                            Spotlight
                        </h4>
                        <p className="font-dancing-script font-normal text-tertiary-800 text-input lg:text-base text-right mt-2">
                            {"This week’s creators"}
                        </p>
                    </div> 
                </div>
                <div className="relative w-full min-h-screen overflow-x-hidden mt-5">
                    <div className="spotlight-carousel w-[120%] ml-[-10%]  h-screen shadow-spotlight">
                        <SwiperCarousel />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Spotlight;