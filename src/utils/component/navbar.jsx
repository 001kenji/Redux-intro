import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){

    return (
        <div className=" flex flex-row gap-3 font-semibold border-b-[1px] border-b-slate-800 mb-8 align-middle justify-start p-2 w-full bg-slate-50 text-slate-900">
            <span className=" flex flex-row gap-0 align-middle hover:text-amber-600"><Link to='/'>Home</Link></span>
            <span className=" flex flex-row gap-0 align-middle hover:text-amber-600"><Link to='/user'>Profile</Link></span>
        </div>
    )
}