function Message({ text }) {
    return (
        <h1 className="message">
            {text === "" || !text ? "Это не возможно !" : text}
        </h1>
    );
}

export default Message;
