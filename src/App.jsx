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
            <p className="message--translit">То самое чуство...</p>
        </>
    );
}

export default App;
