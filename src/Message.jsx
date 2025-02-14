function Message({ text }) {
    return (
        <>
            <p className="message--translit">То самое чуство когда...</p>
            <h1 className="message">
                {text === "" || !text ? "Это не возможно !" : text}
            </h1>
        </>
    );
}

export default Message;
