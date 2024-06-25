"use client";
import { useState } from "react";
import styles from "./playground.module.css";
const Playground = () => {
    const [data, setData] = useState();
    const [input, setInput] = useState("");

    const main = async () => {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama3",
                prompt: input,
                stream: false,
            }),
        });

        const responseData = await response.json();

        setData(responseData.response);
    };
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <label className={styles.title}>Enter something you want to ask LLama3</label>
                <input
                    type='text'
                    placeholder='Enter your question here'
                    className={styles.input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={main}
                    className={styles.button}>
                    Click me
                </button>
                <p>Response: </p>
                <div>{data ? <div>{data}</div> : <div>Waiting for response...</div>}</div>
            </div>
        </div>
    );
};

export default Playground;
