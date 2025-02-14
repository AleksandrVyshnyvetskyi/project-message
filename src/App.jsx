import React, { useState } from "react";
import Header from "./Header";
import Message from "./Message";
import "./App.css";

function App() {
    const [text, setText] = useState("");

    return (
        <>
            <Header text={text} setText={setText} />
            <Message text={text} />
            <p className="message--translit">То самое чуство когда...</p>
            <a
                className="creater"
                href="https://v-aleksandr.pp.ua/"
                target="_blank"
            >
                Made by <span>V. Oleksandr</span>
            </a>
        </>
    );
}

export default App;
