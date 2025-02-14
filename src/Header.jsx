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

function Header({ text, setText }) {
    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <nav>
            <ul>
                <li>
                    <p>
                        <Logo className="logo-icon" />
                        You Message
                    </p>
                </li>
                <li>
                    <ThemeProvider>
                        <ThemeToggle />
                    </ThemeProvider>
                </li>
                <li>
                    <a href="#">Our message</a>
                </li>
                <li>
                    <button type="button">Create a</button>
                    <input
                        type="text"
                        value={text}
                        placeholder="message"
                        onChange={handleInputChange}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default Header;
