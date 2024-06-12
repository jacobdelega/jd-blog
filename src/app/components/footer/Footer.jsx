"use client";

import React, { useContext } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "../../context/ThemeContext"; // Import the ThemeContext

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src={theme === "light" ? "/light_logo.png" : "/dark_logo.png"}
                        alt='Personal logo'
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.logoText}>Jakes Blog</h1>
                </div>
                <p className={styles.desc}>Diving into NextJS, server-side rendering, and more, this personal blog aids my journey and learning experiences in web development.</p>
                <div className={styles.icons}>
                    <Link href='https://github.com/jacobdelega'>
                        <Image
                            src='/social/github.png'
                            alt='GitHub'
                            width={18}
                            height={18}
                        />
                    </Link>
                    <Link href='https://www.linkedin.com/in/jacob-delega-0b1b3b1b2/'>
                        <Image
                            src='/social/linkedin_logo.png'
                            alt='LinkedIn'
                            width={18}
                            height={18}
                        />
                    </Link>
                    <Link href='https://www.instagram.com/jacob.delega/?hl=en'>
                        <Image
                            src='/instagram.png'
                            alt='Instagram'
                            width={18}
                            height={18}
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href='/blog?cat=react'>React</Link>
                    <Link href='/blog?cat=nextjs'>NextJS</Link>
                    <Link href='/blog?cat=python'>Python</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>UI Libraries</span>
                    <Link href='https://ui.shadcn.com/'>shadcn/ui</Link>
                    <Link href='https://mui.com/material-ui/'>MUI</Link>
                    <Link href='https://ui.mantine.dev'>Mantine</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
