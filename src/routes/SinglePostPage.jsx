import Image from "../components/Image";
import {Link} from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
    return (
        <div className='flex flex-col gap-8'>
            {/*details*/}
            <div className="flex gap-8 ">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        The Growing Momentum of Baseball and Softball Across Kenya and Africa
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Author</span>
                        <Link className="text-blue-800">African Seed</Link>
                        <span>on</span>
                        <Link className="text-blue-800">Baseball</Link>
                        <span>3 day ago</span>
                </div>
                <p className=" text-gray-500 font-medium">
                    Exploring the Rise of Baseball, Softball, Baseball5, and Little League in Shaping Africa’s Sporting Future
                </p>
                </div>
                <div className="hidden lg:block w-2/5">
                    <Image src="ball-with-glove.jpg" w="500" className="rounded-2xl"/>
                </div>
            </div>
            {/*content*/}
            <div className="flex flex-col md:flex-row gap-12">
                {/*text*/}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Baseball in Kenya is experiencing a quiet revolution, with an increasing number of young athletes taking up the sport. Once considered a niche activity, baseball is now capturing the interest of schools, local clubs, and community sports programs. The Kenya Baseball Federation has been instrumental in introducing structured leagues and competitions, allowing players to showcase their skills on a national stage.
                        Notably, counties like Nairobi, Nyeri, and Kiambu are becoming hubs for baseball activity. The establishment of regional tournaments and partnerships with international organizations has brought resources and exposure to the sport. As Kenya continues to embrace baseball, its potential to produce world-class talent is evident. The passion and commitment of local players, coaches, and fans are setting the stage for a bright future.
                    </p>
                    <p>
                        Softball is transforming the sports landscape across Africa, especially among the youth. Its emphasis on teamwork, strategy, and inclusivity makes it a favorite in schools and community programs. Countries like Uganda, South Africa, and Kenya are leading the charge in developing softball infrastructure and nurturing young talent.
                        The sport has become a tool for fostering life skills among African youth. Coaches often integrate lessons on discipline, leadership, and resilience into their training sessions. The ease of learning and adaptability of softball has also made it accessible to communities with limited resources. With continued investment and grassroots initiatives, softball is set to become a cornerstone of youth development in Africa.
                    </p>
                    <p>
                        Baseball5, a dynamic and simplified version of baseball, is rapidly gaining traction across Africa. Its minimal equipment requirements and fast-paced nature make it an attractive option for urban and rural communities alike. Countries such as Kenya, Ghana, and Tunisia have already embraced Baseball5, hosting workshops and tournaments to popularize the game.
                        One of the unique aspects of Baseball5 is its inclusivity. The sport encourages mixed-gender teams, promoting gender equality in sports. Additionally, it can be played in small spaces, making it ideal for schools and densely populated areas. As Baseball5 continues to spread across Africa, it is proving to be a powerful way to introduce baseball culture to new audiences while uniting communities through the love of the game.
                    </p>
                    <p>
                        Baseball5, a dynamic and simplified version of baseball, is rapidly gaining traction across Africa. Its minimal equipment requirements and fast-paced nature make it an attractive option for urban and rural communities alike. Countries such as Kenya, Ghana, and Tunisia have already embraced Baseball5, hosting workshops and tournaments to popularize the game.
                        One of the unique aspects of Baseball5 is its inclusivity. The sport encourages mixed-gender teams, promoting gender equality in sports. Additionally, it can be played in small spaces, making it ideal for schools and densely populated areas. As Baseball5 continues to spread across Africa, it is proving to be a powerful way to introduce baseball culture to new audiences while uniting communities through the love of the game.
                    </p>
                    <p>
                        Baseball5, a dynamic and simplified version of baseball, is rapidly gaining traction across Africa. Its minimal equipment requirements and fast-paced nature make it an attractive option for urban and rural communities alike. Countries such as Kenya, Ghana, and Tunisia have already embraced Baseball5, hosting workshops and tournaments to popularize the game.
                        One of the unique aspects of Baseball5 is its inclusivity. The sport encourages mixed-gender teams, promoting gender equality in sports. Additionally, it can be played in small spaces, making it ideal for schools and densely populated areas. As Baseball5 continues to spread across Africa, it is proving to be a powerful way to introduce baseball culture to new audiences while uniting communities through the love of the game.
                    </p>
                    <p>
                        Baseball5, a dynamic and simplified version of baseball, is rapidly gaining traction across Africa. Its minimal equipment requirements and fast-paced nature make it an attractive option for urban and rural communities alike. Countries such as Kenya, Ghana, and Tunisia have already embraced Baseball5, hosting workshops and tournaments to popularize the game.
                        One of the unique aspects of Baseball5 is its inclusivity. The sport encourages mixed-gender teams, promoting gender equality in sports. Additionally, it can be played in small spaces, making it ideal for schools and densely populated areas. As Baseball5 continues to spread across Africa, it is proving to be a powerful way to introduce baseball culture to new audiences while uniting communities through the love of the game.
                    </p>


                </div>
                {/*menu*/}
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            <Image
                                src="ezra-rebels.jpg"
                                className="w-12 h-12 rounded-full object-cover"
                                w="48"
                                h="48"
                            />
                            <Link className="text-blue-800">African Seed</Link>
                        </div>
                        <p className=" text-sm text-gray-500">a dynamic and simplified version of baseball</p>
                            {/*social icons*/}
                            <div className="flex gap-2">
                                <Link>
                                    <Image src="facebook.svg"/>
                                </Link>
                                <Link>
                                    <Image src="instagram.svg"/>
                                </Link>
                        </div>
                    </div>

                    <PostMenuActions/>
                    <h1 className="mt-8 text-sm font-medium">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="underline">All</Link>
                        <Link className="underline" to="/">
                            Baseball
                        </Link>
                        <Link className="underline" to="/">
                            Softball
                        </Link>
                        <Link className="underline" to="/">
                            Baseball5
                        </Link>
                        <Link className="underline" to="/">
                            Little League
                        </Link>
                    </div>
                    <h1 className="mt-8 text-sm font-medium">Search</h1>
                    <Search/>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default SinglePostPage
