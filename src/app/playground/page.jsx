"use client";
import { useState } from "react";
import styles from "./playground.module.css";

const Playground = () => {
    const [data, setData] = useState();
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const main = async () => {
        setLoading(true);
        // Format the input to be a proper prompt
        const customPrompt = "Do not mention anything about the question in the response just give the reponse and nothing else. Also do not provide any bullet points just plain text. [Limit your response to only 50 words.]";

        try {
            const response = await fetch("http://localhost:11434/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "llama3",
                    prompt: `${customPrompt} ${input}`,
                    stream: false,
                }),
            });
            const responseData = await response.json();

            setData(responseData.response);
        } catch (error) {
            setData("Error fetching data");
            console.log("Error fetching data");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className={styles.widgetContainer}>
            <div
                className={`${styles.circleIcon} ${isOpen ? styles.open : ""}`}
                onClick={() => setIsOpen(!isOpen)}>
                <span>+</span>
            </div>
            {isOpen && (
                <div className={styles.expandedWidget}>
                    <label className={styles.widgetTitle}>Ask Llama3 something:</label>
                    <input
                        type='text'
                        placeholder='Enter your question here'
                        className={styles.widgetInput}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        onClick={main}
                        className={styles.widgetButton}>
                        Submit
                    </button>
                    <p className={styles.widgetTitle}>Response:</p>
                    <div className={styles.widgetOutput}>{loading ? <div>Loading response...</div> : <div>{data}</div>}</div>
                </div>
            )}
        </div>
    );
};

export default Playground;
