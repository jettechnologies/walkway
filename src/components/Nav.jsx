import {Logo, Button} from "../components";

function Nav(){

    return(
        <header className="w-full mt-10">
            <nav className="flex justify-between max-xs:flex-col max-xs:gap-y-6">
                <div className="self-center"><Logo type = "header"/></div>
                <div className="w-full max-md:flex-1 max-md:ml-12 max-sm:ml-0 lg:w-[17.6rem]">
                    <Button type = "primary" text = "join us"/>
                </div>
            </nav>
        </header>
    );
}

export default Nav;