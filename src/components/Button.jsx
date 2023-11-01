/* eslint-disable react/prop-types */
function Button({type, text}){

    let style = "";

    switch(type){
        case "primary":
            style = "bg-primary-600 hover:shadow-primary-shadow";
            break;
        case "secondary":
            style = "border-[1.6px] border-primary-600 text-primary-600 hover:secondary-btn-state";
            break;
        default :
            break
    }

    return(
        <button className={`py-4 px-12 max-sm:py-2 lg:py-[1.2rem] lg:px-[3.2rem] w-full text-center ${style} text-exo text-2xl uppercase font-semibold text-secondary-1100`}>
            {text}
        </button>
    );
}

export default Button;