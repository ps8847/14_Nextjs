import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({name:"Prince",age:23,city:"amritsar"},{status:200})
}