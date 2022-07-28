import './Button.css';

function Button ({ symbol, handleClick}) {
    return(
        <div 
        onClick={(() => handleClick(symbol))}
        className="button-wrapper">
            {symbol}
        </div>
    )
}

export default Button