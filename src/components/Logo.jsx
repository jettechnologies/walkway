/* eslint-disable react/prop-types */
import { logo } from "../assets/icons";

function Logo({ type }) {
    const style = type === "header" ? "text-[64px]" : "text-[32px]"; // Note the 'px' unit.
    const imgSize = type === "header" ? 77 : 40;


    return (
        <div className="flex min-w-fit items-center">
            <p className={`font-arima font-bold text-primary-200 text-4xl max-xs:text-3xl lg:${style} uppercase`}>w</p>
            <img src={logo} alt="logo" width={imgSize} height={imgSize} className="max-sm:w-14 object-cover object-center" />
            <p className={`font-arima font-bold text-primary-200 text-4xl max-sm:text-3xl lg:${style} uppercase`}>lkway</p>
        </div>
    );
}
export default Logo;