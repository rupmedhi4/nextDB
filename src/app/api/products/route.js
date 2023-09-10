import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionString } from "@/lib/db";
import product from "@/lib/model/product";

export async function GET() {
    try {
        await mongoose.connect(connectionString); 
        const data = await product.find();
        console.log(data);
        return NextResponse.json({ result: data });
    } catch (err) {
        console.error("Error connecting to the database:", err);
        return NextResponse.json({ result: false, error: "Database connection failed" }, { status: 500 });
    }
}



export async function POST(request){
    const payload = await request.json()
    await mongoose.connect(connectionString)
    let Product =new product(payload)
    // let Product = new product({
    //     name : "redmi 8",
    //     category: "mobile",
    //     color: "white",
    //     company: "MI",
    //     price: "6466",
    // });
    const result = await Product.save()
    return NextResponse.json({result, success:true})
}

