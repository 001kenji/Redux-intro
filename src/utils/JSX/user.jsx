import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "../component/navbar";
import { rootReducer } from "../redux/reducers";
function User(props){
    const database = useSelector(rootReducer)
    const [profiledata, setprofiledata] = useState({})

    useEffect(() => {
        setprofiledata(JSON.parse(database.profile))
    },[])
    console.log(database.profile)
    return (
        <>
            <div>
                <div className=" top-0 sticky w-full">{<Navbar />}</div>

                <ul className=" shadow-lg rounded-sm py-4 shadow-orange-400 my-auto text-center align-middle justify-center  w-[80%] mx-auto grid gap-2">
                    <li className=" flex flex-row mx-auto gap-3 "><p className=" text-right font-semibold text-sm align-middle my-auto">Name: </p>{profiledata.name}</li>
                    <li className=" flex flex-row  mx-auto  gap-3 "><p className=" text-right font-semibold text-sm align-middle my-auto">GENDER:</p> {profiledata.gender}</li>
                    <li className=" flex flex-row  mx-auto  gap-3 "><p className=" text-right font-semibold text-sm align-middle my-auto">NATIONALITY: </p>{profiledata.nationality}</li>
                    <li className=" flex flex-row  mx-auto  gap-3 "><p className=" text-right font-semibold text-sm align-middle my-auto">LANGUAGE: </p>{profiledata.language}</li>
                </ul>
            </div>

        </>
    )
}
export default User