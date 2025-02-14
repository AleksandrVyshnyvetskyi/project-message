import { useState, useEffect } from "react";
import Header from "./Header";
import OurMessage from "./OurMessage";
import Message from "./Message";
import "./App.css";

function App() {
    const [text, setText] = useState("");
    const [showList, setShowList] = useState(false);
    const [selectedQuote, setSelectedQuote] = useState("Это не возможно !");
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const savedQuotes = localStorage.getItem("quotes");
        if (savedQuotes) {
            setQuotes(JSON.parse(savedQuotes));
        } else {
            setQuotes([
                "Маник - Топ",
                "Лучше бы матиз купил",
                "Текстом покажи",
                "Да",
                "Нет",
                "Пошли курить",
                "По кефейку ?",
                "Вона працює",
                "안녕하세요",
                "مرحبًا",
                "नमस्ते",
                "สวัสดี",
                "Γειά σου",
                "Hei",
                "Labas",
                "Moien",
                "Привіт",
                "გამარჯობა",
                "ሰላም",
                "Chào bạn",
            ]);
        }
    }, []);

    useEffect(() => {
        if (quotes.length > 0) {
            localStorage.setItem("quotes", JSON.stringify(quotes));
        }
    }, [quotes]);

    const handleSelectQuote = (quote) => {
        setSelectedQuote(quote);
        setShowList(false);
    };

    const addNewQuote = () => {
        if (text.trim() && !quotes.includes(text.trim())) {
            const updatedQuotes = [...quotes, text.trim()];
            setQuotes(updatedQuotes);
            setText("");
        }
    };

    const deleteQuote = (index) => {
        const updatedQuotes = quotes.filter((_, i) => i !== index);
        setQuotes(updatedQuotes);
    };

    const displayedText = text.trim() !== "" ? text : selectedQuote;

    return (
        <>
            <Header
                text={text}
                setText={setText}
                handleAddQuote={addNewQuote}
                setShowList={setShowList}
                showList={showList}
            />
            {showList ? (
                <OurMessage
                    quotes={quotes}
                    onSelectQuote={handleSelectQuote}
                    onDeleteQuote={deleteQuote}
                />
            ) : (
                <Message text={displayedText} />
            )}
            <a
                className="creater"
                href="https://v-aleksandr.pp.ua/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Made by <span>V. Oleksandr</span>
            </a>
        </>
    );
}

export default App;
