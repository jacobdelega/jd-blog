"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Comments = ({ postSlug }) => {
    const { status } = useSession({ postSlug });

    const { data, isLoading, mutate } = useSWR(`api/comments?postSlug=${postSlug}`, fetcher);

    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder='write a comment...'
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button
                        className={styles.button}
                        onClick={handleSubmit}>
                        {" "}
                        Send{" "}
                    </button>
                </div>
            ) : (
                <Link href='login'>Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading
                    ? "Loading..."
                    : data?.map((item) => (
                          <div
                              className={styles.comment}
                              key={item._id}>
                              <div className={styles.user}>
                                  <Image
                                      className={styles.image}
                                      width={50}
                                      height={50}
                                      src={item.user.image}
                                  />
                                  <div className={styles.userInfo}>
                                      <span className={styles.username}>{item.user.name}</span>
                                      <span className={styles.date}>{item.createdAt.substring(0,10)}</span>
                                  </div>
                              </div>
                              <p className={styles.desc}>{item.desc}</p>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Comments;
