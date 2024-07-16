import { Suspense } from "react";
import * as React from "react";
import styles from "./posts.module.css";
import { getAuthSession } from "@/app/utils/auth";
import prisma from "@/app/utils/connect";
import PostGrid from "../components/postGrid/PostGrid"; // Client componenet
import { redirect } from 'next/navigation'


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

    // Check if there is active session
    if (!session) {
        redirect('/')
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className={styles.container}>
                {session && (
                    <PostGrid
                        className={styles.postContainer}
                        posts={posts}
                    />
                )}
            </div>
        </Suspense>
    );
};

export default PostPage;
