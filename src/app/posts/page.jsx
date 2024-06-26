import { Suspense } from "react";
import * as React from "react";
import styles from "./posts.module.css";
import { getAuthSession } from "@/app/utils/auth";
import prisma from "@/app/utils/connect";
import PostGrid from "../components/postGrid/PostGrid"; // Client componenet


// Since this is server componenet we can use the prisma client directly
// this function is only needed if we are pulling from a client side api
// async function getData(session) {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post?email=${session.user.email}`, { cache: "no-store" });
//     const data = await response.json();
//     return data.posts;
// }

const PostPage = async () => {
    const session = await getAuthSession();
    const posts = await prisma.post.findMany({
        where: {
            user: {
                email: session?.user?.email,
            },
        },
        include: { user: true },
    });


    // Verify post for that user
    if (posts.length === 0) {
        return <div>No posts found for the specified user</div>;
    }

    // Loading state
    const Loading = () => {
        return <div>Grabbing posts....</div>;
    };

    return (
        <Suspense fallback={<Loading />}>
            <div className={styles.container}>
                <PostGrid posts={posts} />
            </div>
        </Suspense>
    );
};

export default PostPage;
