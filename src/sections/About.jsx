import { Button } from "../components";

function About (){

    return (
        <section id = "about" className="bg-tertiary-1100 py-8 md:py-0 min-h-screen padding-x max-container flex items-center">
            <div className="w-full flex flex-col lg:flex-row gap-y-8 lg:gap-x-16 xl:gap-x-20">
                <div className="border-[1.6px] border-secondary-400 shadow-[0px 8px 16px 0px rgba(2, 1, 1, 0.16)] flex-auto grid items-center lg:justify-center lg:w-24 py-[3.3rem] px-[1.6rem] lg:py-[5.3rem]">
                    <h3 className="font-dancing-script font-normal text-4xl/[1.6em] lg:text-6xl/[1.6em] text-center text-tertiary-800">
                        Revolutionizing Fashion
                    </h3>
                </div>
                <div className="flex-auto lg:w-[50%] max-xl:my-0 lg:my-6 xl:w-[60%] flex flex-col gap-y-12 lg:self-center">
                    <div className="self-stretch gap-y-[1.6rem] lg:gap-y-[2.4rem] flex flex-col items-start">
                        <h4 className="font-gfs-didot text-heading-four lg:text-heading-one text-tertiary-100 font-normal uppercase">
                            About us
                        </h4>
                        <p className="font-normal text-base lg:text-large text-tertiary-800 font-exo">
                           <span className="lg:text-heading-five lg:font-gfs-didot text-primary-500 ">Walkway</span> is a groundbreaking platform that aims to revolutionize the fashion industry by connecting fashion designers, models, and photographers in a collaborative and empowering ecosystem. 
                            We seek to uplift aspiring models, provide opportunities for fashion designers, and foster creativity through contractual collaborations.
                        </p>
                    </div>
                    <div className="w-full xl:w-[34.2rem]">
                        <Button type = "secondary" text = "learn more"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;