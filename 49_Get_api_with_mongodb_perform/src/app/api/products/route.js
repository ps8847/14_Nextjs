import { conectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

    let data = [];
    let success = true;

    try{
        await mongoose.connect(conectionStr)
        data = await Product.find();
        
    } catch(error){
        
        data = {result:[]}
        success = false;
    }

    console.log(data);
    return NextResponse.json({result:data}, {success:success})
}

// basic method 

// export async function POST(){
//     await mongoose.connect(conectionStr);
//     let product = new Product({
//         name:"note 10",
//         price:"1000",
//         color:"red",
//         company:"samsung",
//         category:"mobile"
//     })

//     const result = await product.save();

//     return NextResponse.json({result,success:true})
// }


// actual working method

export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(conectionStr);
    let product = new Product(payload)
    const result = await product.save();
    return NextResponse.json({result,success:true})
}

