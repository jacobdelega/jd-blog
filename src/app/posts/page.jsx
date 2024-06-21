'use client'
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import styles from './posts.module.css'

const PostPage = () => {
    // grab session details
    const { data: session, status } = useSession();
    const [posts, setPosts] = useState([]);

    // make a fetch request to get all posts from user email
    const fetchPost = async () => {
        const response = await fetch(`/api/post?email=${session.user.email}`);
        const data = await response.json();

        if (response.ok) {
            setPosts(data.posts);
        }
    };

    useEffect(() => {
        if (session) {
            fetchPost();
        }
    }, [session]);

    return (
        <div>
            <h1>All Users Post Page</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostPage;
