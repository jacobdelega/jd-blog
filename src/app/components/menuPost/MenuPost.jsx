import React from "react";
import styles from "./menuPost.module.css";
import Image from "next/image";
import Link from "next/link";
import prisma from "../../utils/connect";

const MenuPost = async ({ withImage }) => {
    const popularPost = await prisma.post.findMany({
        where: {
            img: null,
        },
        orderBy: {
            views: "desc", // desc for descending order
        },
        include: {
            user: true,
        },
        take: 3,
    });

    console.log(popularPost)


    return (
        <div className={styles.items}>
            {popularPost.map((post) => (
                <Link
                    href={`/posts/${post.slug}`}
                    className={styles.item}>
                    {withImage && (
                        <div className={styles.imgContainer}>
                            <Image
                                src={post.img}
                                alt=''
                                fill
                                className={styles.image}
                            />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={` ${styles.category} ${styles[post.catSlug]} `}>{post.catSlug[0].toUpperCase() + post.catSlug.slice(1)}</span>
                        <h3 className={styles.postTitle}>{post.title} </h3>
                        <div className={styles.detail}>
                            <span className={styles.name}> {post.user.name}</span>
                            <span className={styles.date}> - {post.createdAt.toISOString().substring(0, 10)}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuPost;

{
    /* <Link
        href='/'
        className={styles.item}>
        {withImage && (
            <div className={styles.imgContainer}>
                <Image
                    src='/p1.jpeg'
                    alt=''
                    fill
                    className={styles.image}
                />
            </div>
        )}
        <div className={styles.textContainer}>
            <span className={` ${styles.category} ${styles.culture} `}>Culture</span>
            <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
                <span className={styles.name}> John Doe</span>
                <span className={styles.date}> - 10.02.2023</span>
            </div>
        </div>
    </Link>
    <Link
        href='/'
        className={styles.item}>
        {withImage && (
            <div className={styles.imgContainer}>
                <Image
                    src='/p1.jpeg'
                    alt=''
                    fill
                    className={styles.image}
                />
            </div>
        )}
        <div className={styles.textContainer}>
            <span className={` ${styles.category} ${styles.food} `}>Food</span>
            <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
                <span className={styles.name}> John Doe</span>
                <span className={styles.date}> - 10.02.2023</span>
            </div>
        </div>
    </Link>
    <Link
        href='/'
        className={styles.item}>
        {withImage && (
            <div className={styles.imgContainer}>
                <Image
                    src='/p1.jpeg'
                    alt=''
                    fill
                    className={styles.image}
                />
            </div>
        )}
        <div className={styles.textContainer}>
            <span className={` ${styles.category} ${styles.fashion} `}>Fashion</span>
            <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
                <span className={styles.name}> John Doe</span>
                <span className={styles.date}> - 10.02.2023</span>
            </div>
        </div>
    </Link>
    <Link
        href='/'
        className={styles.item}>
        {withImage && (
            <div className={styles.imgContainer}>
                <Image
                    src='/p1.jpeg'
                    alt=''
                    fill
                    className={styles.image}
                />
            </div>
        )}
        <div className={styles.textContainer}>
            <span className={` ${styles.category} ${styles.coding} `}>Coding</span>
            <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
                <span className={styles.name}> John Doe</span>
                <span className={styles.date}> - 10.02.2023</span>
            </div>
        </div>
    </Link>
    <Link
        href='/'
        className={styles.item}>
        {withImage && (
            <div className={styles.imgContainer}>
                <Image
                    src='/p1.jpeg'
                    alt=''
                    fill
                    className={styles.image}
                />
            </div>
        )}
        <div className={styles.textContainer}>
            <span className={` ${styles.category} ${styles.style} `}>Style</span>
            <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
                <span className={styles.name}> John Doe</span>
                <span className={styles.date}> - 10.02.2023</span>
            </div>
        </div>
    </Link> */
}
