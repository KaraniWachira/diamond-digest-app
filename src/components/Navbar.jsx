import {useState} from "react";
import Image from "./Image.jsx";
import {Link} from "react-router-dom";
import {SignedIn, SignedOut,UserButton} from "@clerk/clerk-react";

const Navbar = () => {

    // state hook to detect change in the hamburger menu
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/*LOGO*/}
            <Link to='/' className="flex items-center gap-2 text-2xl font-bold">
               <Image src="logo.png" alt="logo" w={80} h={80}/>
                <span>Diamond Digest</span>
            </Link>
            {/*MOBILE MENU*/}
            <div className="md:hidden">
                {/*MOBILE BUTTON*/}
                <div className="cursor-pointer text-2xl" onClick={() => setOpen((prevState) => !prevState)}>
                    {open ? "X" : "="}
                </div>
                {/*MOBILE LINK LIST*/}
                <div
                    className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-gray-500 ${open ? "-right-0" : "-right-[100%]"} transition-all ease-in-out`}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Baseball</Link>
                    <Link to="/">Softball</Link>
                    <Link to="/">Baseball5</Link>
                    <Link to="/">Little league</Link>
                    <Link to="">
                        <button className="py-2 px-4 rounded-3xl bg-blue-700 text-white">Login ⚾</button>
                    </Link>
                </div>
            </div>

            {/*DESKTOP MENU*/}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium ">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Baseball</Link>
                <Link to="/">Softball</Link>
                <Link to="/">Baseball5</Link>
                <Link to="/">Little league</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-700 text-white">
                            Login ⚾
                        </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;
