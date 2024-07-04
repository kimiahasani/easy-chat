import { NextRequest } from "next/server";

export async function Post(req:NextRequest){
    const dataFormFront = req.body;
    console.log(dataFormFront)
    return {
        status: 200,
        body: {
            message: "Hello, World!"
        }
    }
}