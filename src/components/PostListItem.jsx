import Image from "./Image";
import {Link } from "react-router-dom";

const PostListItem = () => {
    return (
            <div className="flex flex-col xl:flex-row gap-8">
                {/*image*/}
                <div className="md:hidden xl:block xl:w-1/3">
                    <Image src="origin.jpg" className="rounded-2xl object-cover" w="735"/>
                </div>
                {/*details*/}
                <div className="flex flex-col gap-4 xl:w-2/3">
                    <Link  to="/test" className="text-4xl font-semibold">
                        Baseball5: The New Revolution in Africa
                    </Link >
                    <div className="flex items-center gap-2 text-gray-400">
                        <span>Author</span>
                        <Link className="text-blue-800">African Seed</Link >
                        <span>on</span>
                        <Link className="text-blue-800">Baseball</Link >
                        <span>13 days ago</span>
                    </div>
                    <p>
                        Baseball5, a new version of baseball that’s more accessible and fast-paced, is making waves across Africa. This article examines its popularity and the potential it holds for expanding baseball’s reach across the continent.
                    </p>
                    <Link to="/test" className="underline text-blue-800  text-sm">Read More</Link>
                </div>
            </div>
    );
};

export default PostListItem;
