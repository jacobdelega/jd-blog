'use client';
import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

import HeroLottie from "../lotties/HeroLottie";

const Featured = () => {
    return (
        <div className={styles.container}>
            {/* <h1 className={styles.title}>
                <b>Hey, Jacob here!</b> Welcome to my blog.
            </h1> */}
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <HeroLottie src='/lotties/hero_lottie.json'/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>I'm Jacob Delega.</h1>
                    <p className={styles.postDesc}>A software engineer that aims to become a expert full stack web developer. I will share my experiences during my journey below. </p>
                    <Link href='#category'>
                        <button className={styles.button}>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;
