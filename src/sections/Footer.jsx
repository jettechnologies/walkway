/* eslint-disable react/jsx-no-duplicate-props */
import { messageIcon } from "../assets/icons";
import { Logo } from "../components";
import { contacts, socialIcons } from "../constant";

function Footer (){

    return (
        <section className="max-container padding-x bg-tertiary-1100 pt-16 pb-24 lg:pb-16 flex flex-col gap-y-16 lg:gap-y-24">
            <div id = "top-footer" className="flex flex-col md:flex-wrap md:flex-row gap-y-12 xl:gap-y-0 md:justify-between">
                <Logo />
                <div className="flex flex-col gap-y-6">
                    <h4 className="font-exo text-base font-normal text-tertiary-100">
                        Contact us
                    </h4>
                    <div>
                        {contacts.map(({icon, text}, index) =>(
                            <div key={index} className={`${index !== 0 && "mt-2 lg:mt-4"} flex gap-x-2`}>
                                <img src={icon} alt="contact icons" />
                                <p className="font-exo text-caption font-normal text-tertiary-800">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h4 className="font-exo text-base font-normal text-tertiary-100">
                        Socials
                    </h4>
                    <div className="flex gap-x-6 lg:gap-x-10">
                        {socialIcons.map((socialIcon, index) =>(
                            <a href="#" key={index}>
                                <img src = {socialIcon} alt="social icons"/>
                            </a>
                        ))}
                    </div>     
                </div>
                <div className="max-xl:flex-1 flex flex-col gap-y-6">
                    <h4 className="font-exo text-base font-normal text-tertiary-100">
                        Newsletter
                    </h4>
                    <p className="font-exo text-caption font-normal text-tertiary-800">
                        Get sizzling fashion gist directly in your inbox
                    </p>
                    <div className="flex xl:w-[23rem] max-h-[4.6rem] relative">
                        <input type="text" placeholder="Enter your email address" className="w-[65%] max-h-full border-[1.2px] border-tertiary-800 bg-transparent pl-10 md:pl-12 focus-within:outline-none font-exo text-caption focus-within:text-[14px] max-xl:text-base max-xl:focus-within:text-[18px] xl:text-input xl:focus-within:text-base font-normal text-tertiary-800"/>
                        <div className="w-[35%] h-full">
                            <button className= "py-4 max-sm:py-2  w-full text-center bg-primary-600 hover:shadow-primary-shadow text-exo text-base uppercase font-semibold text-secondary-1100">
                                subscribe
                            </button>
                        </div>
                        <img src={messageIcon} alt="message icon" className="absolute top-[25%] max-xl:top-[31%] xl:top-[32%] left-4"/>
                    </div>
                </div>
            </div>
            <div id="bottom-footer" className="self-center w-fit flex flex-wrap max-sm:gap-y-6">
                <p className="max-sm:order-3 text-base lg:text-large font-dancing-script text-tertiary-800">
                   &copy; 2023 Walkway. All rights reserved
                </p>
                <p className="font-exo text-base lg:text-large font-normal text-tertiary-800 md:ml-[4rem] xl:ml-[6.4rem]">
                    Terms of service
                </p>
                <p className="font-exo text-base lg:text-large font-normal text-tertiary-800 ml-[1.6rem]">
                    Privacy policy
                </p>
            </div>
        </section>
    );
}

export default Footer;