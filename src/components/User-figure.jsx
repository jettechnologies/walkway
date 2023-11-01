/* eslint-disable react/prop-types */
function Figure({img, tag, style}){

    return(
        <figure className={`w-fit h-fit flex gap-4 ${style} border-2 border-white`}>
            <img src={img} alt="users img" className="border-2 border-orange-900"/>
            <figcaption className="font-exo text-base lg:text-large text-tertiary-700 font-normal lg:font-medium">{tag}</figcaption>
        </figure>
    );
}
export default Figure