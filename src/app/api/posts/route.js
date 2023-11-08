import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    try {
        await connect()

        const allPosts = await Post.find()

        console.log(allPosts);

        return new NextResponse(JSON.stringify(allPosts), { status: 200 });

    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
        
    }

}