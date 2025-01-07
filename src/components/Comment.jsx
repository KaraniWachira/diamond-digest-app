import Image from "./Image";

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
            <div className="flex items-center gap-4 ">
                <Image src="featured4.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
                <span className="font-medium">John Doe</span>
                <span className="text-sm text-gray-500"> 12 days ago</span>
            </div>
            <div className="mt-4">
                <p>
                    With the support of international organizations, Kenya’s Little League programs are expanding rapidly.
                    In the coming years, Kenya could see its young players competing at continental and even global levels.
                    The future of baseball in Kenya looks promising, starting with these young stars.
                </p>
            </div>
        </div>
    );
};

export default Comment;
