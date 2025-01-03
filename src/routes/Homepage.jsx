import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div className='mt-4 flex flex-col gap-4'>
            {/*Breadcrumb*/}
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <span> ⚾ </span>
                <span className="text-blue-800">Blogs and Articles</span>
            </div>
            {/*INTRODUCTION*/}
            <div className=" flex items-center justify-center">
                {/*titles*/}
                <div className="">
                    <h1 className="text-gray-800 text-xl md:text-5xl lg:text-6xl font-bold"> Welcome to Diamond Digest: Kenya’s Premier Baseball News Hub!</h1>
                    <p className="mt-8 text-md md:text-xl">Step up to the plate and dive into the world of Kenyan baseball! From thrilling game highlights and in-depth player profiles to behind-the-scenes stories and community buzz, we bring the heartbeat of baseball right to you. Diamond Digest is your ultimate dugout for all things baseball in Kenya. ⚾🌟 </p>

                </div>
            </div>
            {/*FEATURED POSTS*/}
            {/*POST LIST*/}
        </div>
    )
}


export default Homepage
