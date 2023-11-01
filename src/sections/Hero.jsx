import {Nav, Button} from "../components";
import { fashion } from "../assets";


function Hero (){

    return (
       <section className="min-h-screen padding-x pb-24 lg:pb-32 max-container flex flex-col w-full relative bg-hero-bg bg-cover bg-no-repeat max-sm:bg-halves">
        <Nav />
        <div className="w-full self-end mt-28 lg:w-[60%] flex flex-col items-end lg:relative">
            <img src= {fashion} alt="Fashion image" className="w-full hidden lg:block absolute"/>
            <div className="h-fit w-full lg:w-[410px] xl:w-[64%] flex flex-col lg:mt-[3rem]">
                <h1 className="text-center lg:text-right text-tertiary-100 font-gfs-didot text-[3.8rem] max-xs:text-[3rem] lg:text-[2.8rem] leading-[1.4em] font-medium uppercase">bring fashion to life with us</h1>
                <p className="mt-10 mb-12 text-center lg:text-right text-tertiary-700 font-exo font-normal lg:font-medium text-large ">Model | Fashion designer | Photographer?</p>
                <div className="w-full">
                    <Button type = "primary" text = "join waitlist"/>
                </div>
            </div>
        </div>
       </section>
    );
}

export default Hero;