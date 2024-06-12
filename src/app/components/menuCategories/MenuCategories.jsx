import React from "react";
import Link from "next/link";
import styles from "./menuCategories.module.css";
const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link
                href='/blog?cat=react'
                className={`${styles.categoryItem} ${styles.style}`}>
                React
            </Link>
            <Link
                href='/blog?cat=nextjs'
                className={`${styles.categoryItem} ${styles.fashion}`}>
                NextJS
            </Link>
            <Link
                href='/blog?cat=python'
                className={`${styles.categoryItem} ${styles.food}`}>
                Python
            </Link>
            <Link
                href='/blog?cat=leetcode'
                className={`${styles.categoryItem} ${styles.travel}`}>
                LeetCode
            </Link>
            <Link
                href='/blog?cat=fitness'
                className={`${styles.categoryItem} ${styles.culture}`}>
                Fitness
            </Link>
            <Link
                href='/blog?cat=freelancing'
                className={`${styles.categoryItem} ${styles.coding}`}>
                Freelancing
            </Link>
        </div>
    );
};

export default MenuCategories;
