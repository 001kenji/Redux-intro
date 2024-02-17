import React, { useLayoutEffect, useState } from "react";
import Store from "../../store";
import { useSelector, useDispatch } from "react-redux";
import {useForm} from 'react-hook-form'
//import {View, Text, Button} from 'react-native'
import { IncrementFunc, DecrementFunc } from "../actions/auth";
import { INCREMENT,DECREMENT,SUBMIT_PROFILE } from "../actions/type";
import { rootReducer } from "../redux/reducers";
import Navbar from "../component/navbar";
function Dashboard(props){
    const {register, handleSubmit, formState, reset} = useForm({
        defaultValues:{
            'name': "",
            'gender': "",
            'nationality': "",
            'language': ''
        },
        mode: 'all'
    })
    const{errors, isSubmitting, isDirty, isValid} = formState
   const database = useSelector(rootReducer)
   const dispatcher = useDispatch()
    const val = Store.getState().count


    function Action(props){
        if(props == 'increase'){
            dispatcher({
                type:INCREMENT
            })
        }else if(props == 'decrease'){
            dispatcher({
                type:DECREMENT
            })
        }
    }

    function ProfileSubmit(data){
        dispatcher({
            type : SUBMIT_PROFILE,
            payload: JSON.stringify(data)
        })
    }

    //console.log()
    return(
        <>
        <div className=" w-full top-0 sticky">{<Navbar />}</div>
            <p className="font-bold text-xl text-center mx-auto font-mono">Welcome Back...</p>
            <span id="result"
            className=" flex flex-col italic w-fit mx-auto text-center py-3 font-mono font-semibold"
            ><p className=" animate-bounce">The result is:</p> {database.count}</span>
            
            
            <div className=" flex flex-col gap-4 w-[50%] justify-around mx-auto my-5">
                <button 
                    className=" hover:text-amber-500 transition-all duration-500 bg-sky-600 text-base font-semibold font-mono rounded-sm  text-slate-50 shadow-md shadow-slate-900" 
                        onClick={() =>  Action('increase')}>Increment</button>
            <button 
                className=" hover:text-amber-500 transition-all duration-500 bg-sky-600 text-base font-semibold font-mono rounded-sm  text-slate-50 shadow-md shadow-slate-900" 
                    onClick={() => Action('decrease')}>Decrement</button>
        

            </div>

            <div className=" flex w-full py-4">
                <form className=" w-fit flex flex-col justify-around  min-h-[300px] min-w-[300px] mx-auto" noValidate onSubmit={handleSubmit(ProfileSubmit)} >
                    <input className=" border-[1px] border-slate-700 rounded-sm mx-auto w-[80%] text-center shadow-md shadow-slate-700" placeholder="NAME" {...register('name',{
                        required : 'Username is Requried!',
                        minLength : {
                            value : 5,
                            message : 'Input more characters'
                        }
                    })} type="text" />
                    {errors.name && <p className=" bg-slate-900 text-red-500 mx-6 rounded-sm font-semibold text-center" id="error">{errors.name?.message}</p>}
                    <select  className=" border-[1px] border-slate-700 rounded-sm mx-auto w-[80%] text-center shadow-md shadow-slate-700"  {...register('gender',{
                        required : 'A choice is Required!'
                    })} name="gender" id="">
                        <option disabled selected value={null} >Select</option>
                        <option value="MALE">Male</option>
                        <option value="Female">Female</option>
                        <option value="N/A">Rather Not Say</option>
                    </select>
                    {errors.gender && <p className=" bg-slate-900 text-red-500 mx-6 rounded-sm font-semibold text-center" id="error">{errors.gender?.message}</p>}
                    <input className=" border-[1px] border-slate-700 rounded-sm mx-auto w-[80%] text-center shadow-md shadow-slate-700" {...register('nationality',{
                        required  :'Choose a nationality!'
                    })} placeholder="NATIONALITY" type="text" />
                    {errors.nationality && <p className=" bg-slate-900 text-red-500 mx-6 rounded-sm font-semibold text-center" id="error">{errors.nationality?.message}</p>}
                    <select className=" border-[1px] border-slate-700 rounded-sm mx-auto w-[80%] text-center shadow-md shadow-slate-700" {...register('language',{
                        required : 'A language is Required!'
                    })} name="language" id="">
                        <option value="English">English</option>
                        <option value="Kiswahili">Kiswahili</option>
                    </select>
                    {errors.language && <p className=" bg-slate-900 text-red-500 mx-6 rounded-sm font-semibold text-center" id="error">{errors.language?.message}</p>}
                    
                    <button disabled={!isDirty || !isValid || isSubmitting} type="submit" className=" disabled:bg-gray-300 disabled:hover:text-gray-600 bg-sky-600 font-semibold hover:text-amber-600 rounded-sm min-w-[90px] mx-auto text-center">Submit</button>



                </form>
            </div>


            
        </>
    )
}

export default Dashboard