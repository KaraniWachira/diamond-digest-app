import Image from "./Image";
import {Link} from "react-router-dom";

const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/*first post*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/*image*/}
                <Image src="NyRebels-m.jpg" className="rounded-3xl object-cover" />
                {/*details*/}
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg"> 01 </h1>
                    <Link className="text-blue-800 lg:text-lg">Softball</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                {/*title*/}
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">
                    Nyeri Rebels: Dominating the Diamond with Pride and Power
                </Link>
            </div>
            {/*others*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/*second post*/}
                <div className="lg:h-1/3 flex justify-between gap-4 ">
                    <Image
                        src="helmet-balls.jpg"
                        className="rounded-3xl object-cover w-1/3 aspect-video"/>
                    {/*details and title*/}
                    <div className="w-2/3">
                        {/*details*/}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold"> 02 </h1>
                            <Link className="text-blue-800">Baseball</Link>
                            <span className="text-gray-500 text-sm">1 year ago</span>
                        </div>
                        {/*title*/}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            If we build it at the Heart of Baseball's Growth in Kenya </Link>
                    </div>
                </div>
                {/*third post*/}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image
                        src="baseballs.jpg"
                        className="rounded-3xl object-cover w-1/3 aspect-video"/>
                    {/*details and title*/}
                    <div className="w-2/3">
                        {/*details*/}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold"> 03 </h1>
                            <Link className="text-blue-800">Baseball</Link>
                            <span className="text-gray-500 text-sm">1 year ago</span>
                        </div>
                        {/*title*/}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Angels at Bat at the Heart of Baseball's Growth in Africa </Link>
                    </div>
                </div>
                {/*fourth post*/}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image
                        src="ball-with-glove.jpg"
                        className="rounded-3xl object-cover w-1/3 aspect-video"/>
                    {/*details and title*/}
                    <div className="w-2/3">
                        {/*details*/}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold"> 04 </h1>
                            <Link className="text-blue-800">Baseball 4 Africa</Link>
                            <span className="text-gray-500 text-sm">2 weeks ago</span>
                        </div>
                        {/*title*/}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Mombasa Infernos burn imaginary winners </Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FeaturedPosts;
