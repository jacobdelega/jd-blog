import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "../../components/menu/Menu";
import Comments from "../../components/comments/Comments";
import prisma from "../../utils/connect";

const SinglePage = async ({ params }) => {
    const { slug } = params;
    const data = await prisma.post.update({
        where: { slug },
        data: { views: { increment: 1 } },
        include: { user: true },
    });

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image
                                    src={data.user.image}
                                    alt=''
                                    fill
                                    className={styles.avatar}
                                />
                            </div>
                        )}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user.name}</span>
                            <span className={styles.date}>{data?.createdAt.toISOString().substring(0, 10)}</span>
                        </div>
                    </div>
                </div>
                {data?.img && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={data.img}
                            alt=''
                            fill
                            className={styles.image}
                        />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: data?.desc }}
                    />
                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
