import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";
const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Most popular</h1>
            <MenuPost withImage={false}/>

            {/* Categories section */}
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories/>

            {/* Bottom half */}
            {/* <h2 className={styles.subtitle}>Chosen by the author</h2>
            <h1 className={styles.title}>Editors pick</h1>
            <MenuPost withImage={true}/> */}
        </div>
    );
};

export default Menu;
