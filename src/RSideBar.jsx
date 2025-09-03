import { Icons, MyImage} from './feed';
function SearchBar() {
    return (
        <div className="flex flex-row gap-2 items-center border-[1px] border-gray-300 rounded-2xl py-2 px-1">
            <Icons name="search_icon" />
            <div className="w-[80%]"><input className="w-full outline-0 sm:text-md md:text-lg lg:text-xl" type="text" placeholder="Search" /></div>
        </div>
    )
}

function Button(props){
    return(
        <div className="">
            <button className="bg-[#787a7a] sm:text-sm md:text-md lg:text-lg flex flex-row justify-center items-center pt-1 pb-1 pr-2 pl-2 rounded-2xl">{props.info}</button>
        </div>
    )
}

function Person(props) {
    return (
        <div className='flex flex-row gap-2 sm:justify-between lg:justify-evenly items-center'>
            <MyImage name={`${props.name}`} />
            <div className='flex flex-row lg:justify-between items-center w-[90%] sm:justify-center'>
                <div className='flex flex-col gap-0 sm:hidden lg:block'>
                    <div><span className='font-bold capitalize'>{`${props.name}`}</span></div>
                    <div><span className='text-gray-300'>{`${props.name}`}</span></div>
                </div>
                <Button info="follow"/>

            </div>
        </div>
    )
}

function WhoToFollow() {
    return (
        <div className='h-fit w-full p-2 mt-4 border-[1px] border-gray-300 rounded-2xl flex flex-col gap-3'>
            <div><span className='sm:text-md md:text-lg lg:text-xl'>Who to Follow !!</span></div>
            <Person name="taher_malik" />
            <Person name="emma_watson"/>
        </div>
    )
}

export default function RSideBar() {
    return (
        <div className="w-[30%] h-full bg-black flex flex-col p-2">
            <SearchBar />
            <WhoToFollow />
        </div>
    )
}