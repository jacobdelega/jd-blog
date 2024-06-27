import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";

import { FaPerson } from "react-icons/fa6";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.label}>Contact me</p>
            <h1 className={styles.title}> Lets get in touch. </h1>
            <p className={styles.subtitle}>
                Or just reach out manually to{" "}
                <Link
                    href=''
                    className={styles.email}>
                    jacobdelega@gmail.com
                </Link>
            </p>

            <div className={styles.mainContent}>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Fullname</label>
                    <input
                        type='text'
                        placeholder='Name'
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Email</label>
                    <input
                        type='email'
                        placeholder='Email'
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Message</label>
                    <textarea
                        placeholder='Message'
                        className={styles.textarea}
                    />
                </div>
                <button className={styles.button}>Submit Form </button>
            </div>
        </div>
    );
};

export default AboutPage;
