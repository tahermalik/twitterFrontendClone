import { useState } from "react"

function NewUser(props){
    if(props.flag){
        return(
            <>
                <div className="w-full"><input className="w-full px-5 py-2 placeholder:sm:text-lg placeholder:md:text-xl placeholder:lg:text-2xl  sm:text-lg md:text-xl lg:text-xl outline-0 focus:border-1 border-blue-400 rounded-full" type="text" placeholder="Enter Name"/></div>
                <div className="w-full"><input className="w-full px-5 py-2 placeholder:sm:text-lg placeholder:md:text-xl placeholder:lg:text-2xl  sm:text-lg md:text-xl lg:text-xl outline-0 focus:border-1 border-blue-400 rounded-full" type="email" placeholder="Enter Email"/></div>
            </>
        )
    }else{
        return(
            <></>
        )
    }
}

function LoginBox(){
    const [newUser,setNewUser]=useState(true);
    function toggle(){
        setNewUser(!newUser)
    }
    return(
        <div className="h-[50%] w-[50%] flex flex-col gap-6 p-2">
            <div className="w-full pl-3"><span className="sm:text-4xl lg:text-6xl font-bold">Happening Now...</span></div>
            <div className="w-[80%]">
                <form className="w-full" action="">
                    <div className="flex flex-col gap-3 w-full">
                        <NewUser flag={newUser}/>
                        <div className="w-full"><input className="w-full px-5 py-2 placeholder:sm:text-lg placeholder:md:text-xl placeholder:lg:text-2xl  sm:text-lg md:text-xl lg:text-xl outline-0 focus:border-1 border-blue-400 rounded-full" type="text" placeholder="Enter UserName"/></div>
                        <div className="w-full"><input className="w-full px-5 py-2 placeholder:sm:text-lg placeholder:md:text-xl placeholder:lg:text-2xl  sm:text-lg md:text-xl lg:text-xl outline-0 focus:border-1 border-blue-400 rounded-full" type="password" placeholder="Enter Password"/></div>
                        <div className="pl-5 w-full mt-2"><button className="bg-gray-300 text-black w-full px-3 py-2 rounded-full sm:text-lg md:text-xl flex flex-row justify-center items-center cursor-pointer hover:bg-gray-400">{newUser ? "Sign-In":"Log-In"}</button></div>
                        <div className="pl-5"><span>{newUser ? "Already have an account!":"Create new Account!"}</span><span onClick={toggle} className="cursor-pointer text-gray-300 ml-3 underline">{newUser ? "Log-in":"Create"}</span></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default function Login(){
    return(
        <div className="w-screen h-screen bg-black text-white flex flex-row justify-center items-center">
            <div className="flex flex-row justify-around items-center gap-2 w-[70%]">
                <div className="h-[200px] w-[200px]"><img className="invert-75 object-contain h-full w-full" src="logo.svg" alt="logo_img" /></div>
                <LoginBox/>
            </div>
        </div>
    )
}