import {CiSearch} from "react-icons/ci";

const Search = () => {
    return (
        <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
            <CiSearch />
            <input type="text" placeholder="search a post..."  className="bg-white"/>
        </div>
    )
}

export default Search;
