import {CiBookmark} from "react-icons/ci";

import {RiDeleteBin6Line} from "react-icons/ri";

const PostMenuActions = () => {
    return (
        <div className="">
            <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                <CiBookmark/>
                <span>Save this Post</span>
            </div>
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                {/*icon*/}
                 <RiDeleteBin6Line />
                <span>Delete this Post</span>
            </div>
        </div>
    );
};

export default PostMenuActions;



