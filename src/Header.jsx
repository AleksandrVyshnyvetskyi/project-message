import Logo from "./Logo";
import { useContext } from "react";
import ThemeContext, { ThemeProvider } from "./ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Yellow Mode"}
        </button>
    );
};

function Header({ text, setText, handleAddQuote, setShowList, showList }) {
    const handleInputChange = (e) => setText(e.target.value);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleAddQuote();
        }
    };

    return (
        <nav>
            <ul>
                <li>
                    <p>
                        <Logo className="logo-icon" />
                        Your Message
                    </p>
                </li>
                <li>
                    <ThemeProvider>
                        <ThemeToggle />
                    </ThemeProvider>
                </li>
                <li>
                    <button onClick={() => setShowList(!showList)}>
                        {showList ? "Your message" : "Our messages"}
                    </button>
                </li>
                <li>
                    <button type="button" onClick={handleAddQuote}>
                        Create a
                    </button>
                    <input
                        type="text"
                        value={text}
                        placeholder="message"
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default Header;
