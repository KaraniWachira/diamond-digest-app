import {Link} from "react-router-dom";
import {CiSearch} from "react-icons/ci";

const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
            {/*links*/}
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link to="/posts" className="bg-blue-800 text-white rounded-full px-4 py-2">All Posts</Link>
                <Link to="/posts?cat=baseball" className="hover:bg-blue-200 rounded-full px-4 py-2">Baseball</Link>
                <Link to="/posts?cat=softball" className="hover:bg-blue-200 rounded-full px-4 py-2">Softball</Link>
                <Link to="/posts?cat=baseball5" className="hover:bg-blue-200 rounded-full px-4 py-2">Baseball5</Link>
                <Link to="/posts?cat=little-league" className="hover:bg-blue-200 rounded-full px-4 py-2">Little League</Link>
                <Link to="/posts?cat=ballclubs" className="hover:bg-blue-200 rounded-full px-4 py-2">Ball Clubs</Link>
            </div>
                <span className="text-xl font-medium"> | </span>
            {/*search*/}
            <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
                <CiSearch />
                <input type="text" placeholder="search a post..." className="bg-transparent" />
            </div>

        </div>
    )
}

export default MainCategories;




