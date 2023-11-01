import { Button, Figure } from "../components";
import { model, fashionDesigner, photographer } from "../assets";
// import { users } from "../constant";

function Users() {

    return(
        <section className="max-container min-h-screen lg:px-32 pb-24 bg-secondary-1100 flex flex-col border-2 border-blue-500 gap-y-8 lg:gap-y-16">
            <div
                 className="w-full max-h-fit border-2 border-green-600 grid gap-6 lg:gap-12 grid-rows-[repeat(2, minmax(200px, 1fr))] lg:grid-rows-1 grid-cols-[repeat(2, minmax(200px, 1fr))] lg:grid-cols-3">
                <figure className="border-2 max-sm:w-[165px] border-red-400 row-span-2 lg:row-span-1 flex gap-[0.4rem]">
                    <img src={model} alt="users img" className="border-2 border-orange-900 w-[85%] object-cover object-center h-full"/>
                    <figcaption className="h-fit whitespace-nowrap border-2 border-white font-exo text-base lg:text-large text-tertiary-700 font-normal lg:font-medium -rotate-90 ">Model</figcaption>
                </figure>
                <figure className="border-2 border-blue-400 col-start-2 col-end-3 row-start-1 row-end-2 flex gap-[0.4rem] relative">
                    <img src={fashionDesigner} alt="users img" className="border-2 border-orange-900 w-[85%] h-full object-cover object-center"/>
                    <figcaption className="h-fit absolute top-14 -right-[3.25rem] whitespace-nowrap border-[3px] border-white  font-exo text-base lg:text-large text-tertiary-700 font-normal lg:font-medium -rotate-90">Fashion designer</figcaption>
                </figure>
                <figure className="border-2 border-orange-900 relative col-start-2 col-end-3 row-start-2 row-end-3 lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1 flex gap-[0.4rem]">
                    <img src={photographer} alt="users img" className="border-2 border-orange-900 w-[85%] h-full object-cover object-center"/>
                    <figcaption className="h-fit absolute top-14 -right-[3.25rem] whitespace-nowrap border-2 border-white font-exo text-base lg:text-large text-tertiary-700 font-normal lg:font-medium -rotate-90">Photographer</figcaption>
                </figure>

                {/* Mapping over all the users element */}
                {/* {
                    users.map((user, index) => (
                        <Figure key = {index} {...user}/>
                    ))
                } */}
            </div>
            <div className="w-full flex flex-col gap-y-12 padding-x">
                <div className="w-full lg:w-[65%] max-h-fit">
                    <h3 className="font-gfs-didot text-heading-four lg:text-heading-one text-tertiary-100 font-normal">
                        BRILLIANCE IN COLLABORATION
                    </h3>
                    <p className="font-exo text-base lg:text-large text-tertiary-900 font-normal mt-[1.6rem] lg:mt-[2.4rem]">
                        More than just a stage. 
                        Collaboration and creativity is fostered by facilitating contract-based 
                        agreements between models, fashion designers, and photographers.
                    </p>
                </div>
                <div className="w-full lg:w-[65%] xl:w-[34.2rem]">
                    <Button type = {"primary"} text = {"sign up"}/>
                </div>
            </div>
        </section>
    );
}

export default Users;