import { Link } from "react-router-dom"

function ProfileTopMost(){
    return(
        <div className="flex flex-row p-2 justify-between items-center">
            <div className="flex flex-row justify-evenly items-center gap-5">
                <Link to="/" className="hover:bg-gray-600 hover:rounded-full p-1 flex flex-row items-center justify-center"><img className="lg:h-[25px] lg:w-[25px] md:h-[20px] md:w-[20px] sm:h-[18px] sm:w-[18px]" src="back.svg" alt="back_arrow" /></Link>
                <div className="flex flex-col">
                    <div><span className="font-bold sm:text-md md:text-lg lg:text-xl">Taher Malik</span></div>
                    <div><span className="text-sm text-gray-300">0 posts</span></div>
                </div>
            </div>

            <div className="mr-2 hover:bg-gray-600 hover:rounded-full p-1 flex flex-row items-center justify-center"><img className="lg:h-[25px] lg:w-[25px] md:h-[20px] md:g-[20px] sm:h-[18px] sm:w-[18px]" src="search_icon.svg" alt="search_icon" /></div>

        </div>
    )
}

function MyImage(props){
    return(
        <div className="flex flex-row justify-center items-center absolute bottom-[1px] left-[20px] border-[5px] border-black rounded-full">
            <div className="w-[100px] h-[100px] rounded-full"><img className="w-[100%] h-[100%] rounded-full object-contain" src={`${props.name}.jpg`} alt="my_photo" /></div>
        </div>
    )
}

function ProfileImage(){
    return(
        <div className="w-full h-[35%] bg-gray-800 relative">
            <div className="w-full h-[80%]"><img className="h-[100%] w-[100%] object-contain" src="https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg" alt="iron_image" /></div>
            <MyImage name="taher_malik"/>
            <div><button className="absolute right-4 bottom-4 border-1 border-white px-3 py-1 rounded-full flex flex-row justify-center items-center hover:bg-gray-700 cursor-pointer"><span className="capitalize">edit profile</span></button></div>
        </div>

    )
}

function PersonalInfo(){
    return(
        <div className="w-full flex flex-col p-2 mt-1">
            <div><span className="font-bold sm:text-lg lg:text-2xl">Taher Malik</span></div>
            <div><span className="text-sm text-gray-300">@taher_malik</span></div>
            <div className="line-clamp-2 w-full text-justify"><span className="sm:text-md md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eaque nobis, adipisci voluptates optio nam labore nisi vel in aliquam blanditiis, ut mollitia ex voluptatem commodi dolorum unde expedita necessitatibus deleniti porro. Iusto quisquam dolores tempora animi, rerum consectetur eligendi numquam deserunt iste eos nobis esse suscipit, odio delectus quidem.</span></div>
        </div>
    )
}

export default function Profile(){
    return(
        <div className="bg-black w-[50%] h-full border-l-[1px] border-r-[1px] border-white flex flex-col">
            <ProfileTopMost/>
            <ProfileImage/>
            <PersonalInfo/>
        </div>
    )
}