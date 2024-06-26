import { getAuthSession } from "@/app/utils/auth";
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 2; // Setting a limit to number allowed pages.

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat }),
        },
    };
    try {
        const [posts, count] = await prisma.$transaction([prisma.post.findMany(query), prisma.post.count({ where: query.where })]);
        return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }));
    }
};

// CREATE A SINGLE POST
export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(JSON.stringify({ message: "Not authenticated" }, { status: 401 }));
    }

    try {
        const body = await req.json();
        // console.log('The body is', body);
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email },
        });

        // console.log('Successful post creation', post)


        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
    }
};
