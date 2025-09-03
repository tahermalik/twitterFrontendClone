import "./custom.css";
function TopMost(){
    return(
        <div className="flex flex-row h-[7%] border-b-[1px] border-white sticky top-0 backdrop-blur-sm">
            <div className="flex flex-row w-1/2 justify-center items-center sm:text-md md-text-lg lg:text-2xl hover:bg-gray-600">For You</div>
            <div className="flex flex-row w-1/2 justify-center items-center sm:text-md md-text-lg lg:text-2xl hover:bg-gray-600">Following</div>
        </div>
    )
}

export function Icons(props){
    return(
        <div className="flex flex-row items-center justify-center sm:h-[15px] sm:w-[15px] md:h-[17px] md:w-[17px] lg:h-[20px] lg:w-[20px] cursor-pointer">
            <img src={`${props.name}.svg`} alt={`${props.name}_logo`} />
        </div>
    )
}

export function MyImage(props){
    return(
        <div className="flex flex-row justify-center items-center h-full">
            <div className=""><img className="w-[50px] h-[50px] object-contain rounded-full" src={`${props.name}.jpg`} alt="my_photo" /></div>
        </div>
    )
}

function Button(props){
    return(
        <div className="">
            <button className="bg-[#787a7a] sm:text-sm md:text-md lg:text-lg flex flex-row justify-center items-center pt-2 pb-2 pr-4 pl-4 rounded-2xl">{props.info}</button>
        </div>
    )
}

function CreatePost(){
    return(
        <div className="flex flex-row p-2 pt-4 pb-4 gap-3">
            <MyImage name="taher_malik"/>
            <div className="flex flex-col gap-3 w-[80%]">
                <div><input className="sm:text-md md:text-lg lg:text-2xl w-full outline-0" type="text" placeholder="What's Happening?"/></div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <Icons name="img_svg"/>
                        <Icons name="gif"/>
                        <Icons name="grok_2"/>
                        <Icons name="poll"/>
                        <Icons name="smiley"/>
                    </div>
                    <Button info="Post"/>
                </div>
            </div>
        </div>
    )
}

function ShowPost(){
    return(
        <div className="w-full p-4 flex flex-row justify-center items-center border-t-[1px] border-b-[1px]">
            <span className="cursor-pointer"><a className="underline-offset-0 text-blue-500 sm:text-md md:text-lg lg:text-2xl" href="">Show Post</a></span>
        </div>
    )
}

function PostIcons(){
    return(
        <div className="flex flex-row justify-evenly items-center mb-2">
            <div className="hover:bg-blue-800 rounded-full p-1 flex flex-row items-center justify-center gap-1">
                <Icons name="messages"/>
                <div><span className="sm:text-sm md:text-md lg:text-lg">0</span></div>
            </div>
            <div className="hover:bg-yellow-600 rounded-full p-1 flex flex-row items-center justify-center gap-1">
                <Icons name="repeat_svg"/>
                <div><span className="sm:text-sm md:text-md lg:text-lg">0</span></div>
            </div>
            <div className="hover:bg-red-600 rounded-full p-1 flex flex-row items-center justify-center gap-1">
                <Icons name="fav"/>
                <div><span className="sm:text-sm md:text-md lg:text-lg">0</span></div>
            </div>
            <div className="hover:bg-green-600 rounded-full p-1 flex flex-row items-center justify-center"><Icons name="bar"/></div>
            <div className="hover:bg-blue-800 rounded-full p-1 flex flex-row items-center justify-center"><Icons name="bookmark_2"/></div>
        </div>
    )
}

function Post(props){
    return(
        <div className="flex flex-row pl-2 pr-2 pt-4 gap-3 w-full border-b-[1px] border-white">
            <MyImage name={props.name}/>
            <div className="flex flex-col w-[85%]">
                <div className="name"><span className="font-semibold sm:text-sm md:text-md lg:text-lg capitalize">{props.name}</span> <span className="sm:text-sm md:text-md text-gray-300">@{props.name}</span></div>
                <div>
                    <span className="line-clamp-4 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat doloribus sed magni labore corporis consectetur omnis cumque, ratione, impedit quod veritatis natus similique? Quibusdam ullam beatae, voluptate amet est ad nemo minus, rerum itaque vitae voluptatem adipisci eos aperiam iusto ducimus repudiandae sunt dolor doloremque possimus harum. Quod dolores impedit quidem architecto maiores aut explicabo libero excepturi tempora consequatur ut unde placeat, nisi provident in! Eius laborum, id ipsum, natus tempora perferendis voluptates quas aspernatur a sed maiores minima! Totam, amet esse reprehenderit suscipit, possimus porro quidem rerum fugiat minima quae magni consequatur quos laborum sunt quia, maxime vero reiciendis.</span>
                </div>

                <div className="mt-2 mb-2">
                    <img src={`${props.name}.jpg`} alt="emma_img" className="rounded-2xl"/>
                </div>

                <PostIcons/>
            </div>
        </div>
    )
}
export default function Feed(){
    return(
        <div className="border-l-[1px] border-r-[1px] bg-black w-[50%] h-full overflow-scroll no_scroll_bar">
            <TopMost/>
            <CreatePost/>
            <ShowPost/>
            <Post name="emma_watson"/>
            <Post name="taher_malik"/>
        </div>
    )
}