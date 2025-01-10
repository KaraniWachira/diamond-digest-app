import { useState} from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <h1 className='mb-8 text-2xl'> All Posts: Where the fun never strikes out!</h1>
            <button onClick={() => setOpen((prev) => !prev)}
                    className="bg-blue-800 text-sm text-white px-4 py-2 rounded-xl mb-4 md:hidden">
                {open ? "Close" : "Filter or Search"}
            </button>
            <div className="flex gap-8">
                <div className="classnam">
                    <PostList />
                </div>
                <div className="classnam">
                    <SideMenu />
                </div>
            </div>
        </div>
    );
};


export default PostListPage;
