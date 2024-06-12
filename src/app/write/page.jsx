"use client";
import { React, useEffect, useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";

// Must import dynamic as SSR does not work with ReactQuill
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";
const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/app/utils/firebase";

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(false);
    const [media, setMedia] = useState("");
    const [file, setFile] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    const { status } = useSession();

    const router = useRouter();

    useEffect(() => {
        const storage = getStorage(app);
        const upload = () => {
            const name = new Date().getTime() + file.name; // To ensure a unique file name
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        };

        file && upload();
    }, [file]);

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }
    if (status === "unauthenticated") {
        router.push("/");
    }

    const slugify = (str) => {
        str.toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "style", //If not selected, choose the general category
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.slug}`);
        }
    };

    return (
        <div className={styles.container}>
            <input
                type='text'
                placeholder='Title'
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select
                className={styles.select}
                onChange={(e) => setCatSlug(e.target.value)}>
                <option value='react'>React</option>
                <option value='nextjs'>NextJS</option>
                <option value='python'>Python</option>
                <option value='fitness'>Fitness</option>
                <option value='freelancing'>Freelancing</option>
                <option value='leetcode'>LeetCode</option>
            </select>
            <div className={styles.editor}>
                <button
                    className={styles.button}
                    onClick={() => setOpen(!open)}>
                    <Image
                        src='/plus.png'
                        alt=''
                        width={16}
                        height={16}
                    />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <label htmlFor='image'>
                                <Image
                                    src='/image.png'
                                    alt=''
                                    width={16}
                                    height={16}
                                />
                                <input
                                    type='file'
                                    id='image'
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </label>
                        </button>
                    </div>
                )}
                <DynamicQuill
                    className={styles.textArea}
                    theme='bubble'
                    value={value}
                    onChange={setValue}
                    placeholder='tell me your story'
                />
            </div>
            <button
                className={styles.publish}
                onClick={handleSubmit}>
                Publish
            </button>
        </div>
    );
};

export default WritePage;
