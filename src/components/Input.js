import './Input.css'

function Input({text, result}){
    return(
        <div className="input-wrapper">
            <div className='result'>
                <h3>{result}</h3>
            </div>
            <div className='text'>
                <h3>{text}</h3>
            </div>

        </div>
    )
}

export default Input