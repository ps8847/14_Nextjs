import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { conectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";

export async function PUT(request , content){
    console.log(content);
    const productId = content.params.productid;
    const filter = {_id:productId}

    const payload = await request.json();
    console.log(payload);

    await mongoose.connect(conectionStr)
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}