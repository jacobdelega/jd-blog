import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Link href='https://github.com/jacobdelega'>
                    <Image
                        src='/social/github.png'
                        alt='GitHub'
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href='https://www.linkedin.com/in/jacob-delega-0b1b3b1b2/'>
                    <Image
                        src='/social/linkedin_logo.png'
                        alt='LinkedIn'
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href='https://www.instagram.com/jacob.delega/?hl=en'>
                    <Image
                        src='/instagram.png'
                        alt='Instagram'
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
            <div className={styles.logo}>
                <Link href='/'>JBlog</Link>
            </div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link
                    href='/contact'
                    className={styles.link}>
                    Contact
                </Link>
                {/* <Link
                    href='/about'
                    className={styles.link}>
                    About
                </Link> */}
                <AuthLinks />
            </div>
        </div>
    );
};

export default Navbar;
