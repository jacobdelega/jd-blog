import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

// Delete the post
export const DELETE = async (req) => {
    const { searchParams } = new URL(req.url);
    const postID = searchParams.get("id");

    try {
        await prisma.post.delete({
            where: {
                id: postID,
            },
        });

        return new NextResponse(JSON.stringify({ message: "Post deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("An error occurred while deleting the post:", error);
        return new NextResponse(JSON.stringify({ message: "An error occurred while deleting the post" }), { status: 500 });
    }
};
