import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(req,content){

    const userData = user.filter((item)=>item.id==content.params.id)

    return NextResponse.json(userData.length == 0 ? {result:"no data found" , success:false}:{result: userData[0] , success:true} , {status:userData.length == 0 ? 404 : 201})
}