import { Button} from "../components";
import { model, fashionDesigner, photographer } from "../assets";
// import { users } from "../constant";

function Users() {

    return(
        <section className="max-container min-h-screen lg:px-32 pb-24 bg-secondary-1100 flex flex-col gap-y-8 lg:gap-y-16">
            <div
                 className="w-full max-h-fit pr-4  border-green-600 grid gap-6 lg:gap-12 grid-rows-[repeat(2, minmax(200px, 1fr))] lg:grid-rows-1 grid-cols-[repeat(2, minmax(200px, 1fr))] lg:grid-cols-3">
                <figure className=" max-sm:w-[165px] h-[80%] lg:h-full row-span-2 lg:row-span-1 lg:col-end-2 flex lg:max-h-[269px] xl:max-h-[360px]">
                    <img src={model} alt="users img" className="w-[90%] object-cover object-center h-full"/>
                    <figcaption className="h-fit mt-2 lg:mt-3 -ml-1 whitespace-nowrap  font-exo text-base lg:text-large text-tertiary-700 font-normal lg:font-medium -rotate-90 ">Model</figcaption>
                </figure>
                <figure className="col-start-2 col-end-3 row-start-1 row-end-2 flex relative lg:mt-24 lg:max-h-[269px] xl:max-h-[360px]">
                    <img src={fashionDesigner} alt="users img" className="w-[90%] h-full object-cover object-center"/>
                    <figcaption className="h-fit absolute top-12 lg:top-16 right-[-3.25rem] lg:right-[-4.5rem] xl:right-[-4rem] whitespace-nowrap text-right font-exo text-base lg:text-large text-tertiary-700 font-normal lg:font-medium -rotate-90">Fashion designer</figcaption>
                </figure>
                <figure className="relative col-start-2 col-end-3 row-start-2 row-end-3 lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1 flex lg:mt-12 lg:max-h-[269px] xl:max-h-[360px]">
                    <img src={photographer} alt="users img" className="w-[90%] h-full object-cover object-center"/>
                    <figcaption className="h-fit absolute top-9 lg:top-12 right-[-2.5rem] lg:right-[-3.5rem] xl:right-[-3rem] whitespace-nowrap font-exo text-base lg:text-large text-tertiary-700 font-normal lg:font-medium -rotate-90">Photographer</figcaption>
                </figure>
            </div>
            <div className="w-full flex flex-col gap-y-12 px-10 lg:px-0">
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