import Feed from "./feed";
import LSideBar from "./LSideBar";
import RSideBar from "./RSideBar";
import { Outlet } from "react-router-dom";

export default function Home(){
    return(
        <div className="flex flex-row  bg-blue-500 w-[80%] mx-auto justify-between items-center h-screen text-white">
            <LSideBar/>
            <Outlet/>
            <RSideBar/>
        </div>
    )
}