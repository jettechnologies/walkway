/* eslint-disable react/no-unknown-property */
import { fashion, frames } from "../assets";
import { Button, Frames } from "../components";

const FrameSpotlight = () =>{

    return (
        <section className="overflow-hidden max-container min-h-screen padding-x py-32 lg:py-40 grid place-items-center bg-secondary-1100 relative">
            <img src={fashion} alt="fashion text image" className="absolute top-[4rem] lg:top-[33%] xl:top-[42%] right-[63%] md:right-[80%] lg:right-[85%] xl:right-[88%]"/>
            <div className="w-fit flex flex-col gap-y-10">
                <h3 className="font-gfs-didot text-heading-four lg:text-heading-one font-normal text-tertiary-100 text-center">
                    DON’T THINK, JUST STEP ON THE WALKWAY
                </h3>
                <div className="flex flex-col md:flex-row md:justify-center">
                    <Frames>
                        {frames.map((frame, index) =>{
                            return <img src = {frame} key={index} className={`${index !== 0 && "ml-[-1rem]"}`}/>
                        })}
                    </Frames>
                    <p className="md:ml-2 font-dancing-script text-base font-normal text-center text-tertiary-800">
                        Join over 250+ on our waitlist
                    </p>
                </div>
                <div className="w-full md:w-[16.5rem] lg:w-80 md:self-center">
                    <Button type = {"primary"} text = {"join now"} />
                </div>
            </div>
            <img src={fashion} alt="fashion text image" className="absolute bottom-[2rem] md:bottom-0 left-[37%] md:left-[42%] xl:left-[60%]"/>
        </section>
    );
}

export default FrameSpotlight;