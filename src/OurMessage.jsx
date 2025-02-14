const OurMessage = ({ quotes, onSelectQuote, onDeleteQuote }) => {
    return (
        <div>
            <div className="quote-list">
                {quotes.map((quote, index) => (
                    <div
                        key={index}
                        className="quote-item"
                        onClick={() => onSelectQuote(quote)}
                    >
                        <span>{quote}</span>
                        <button
                            className="remove-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                onDeleteQuote(index);
                            }}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurMessage;
