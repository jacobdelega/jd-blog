import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

// Grabbing all the post based on user email
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("email");

    // Validate email parameter
    if (!userEmail) {
        return NextResponse.json({ message: "Email parameter is required" }, { status: 400 });
    }

    try {
        const posts = await prisma.post.findMany({
            where: {
                user: {
                    email: userEmail,
                },
            },
        });

        if (posts.length === 0) {
            return NextResponse.json({ message: "No posts found for the specified user" }, { status: 404 });
        }
        
        return NextResponse.json({ posts: posts }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while fetching posts" }, { status: 500 });
    }
};
