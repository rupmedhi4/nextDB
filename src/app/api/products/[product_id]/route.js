import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionString } from "@/lib/db";
import product from "@/lib/model/product";

export async function PUT(request, content) {

    const productId = content.params.product_id
    const filter = { _id: productId }
    const payload = await request.json()
    await mongoose.connect(connectionString)
    const result = await product.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result, sucess: true })

}

export async function GET(request, content) {

    const productId = content.params.product_id
    const record = { _id: productId }
    await mongoose.connect(connectionString)
    const result = await product.findById(record)
    return NextResponse.json({ result, sucess: true })

}
