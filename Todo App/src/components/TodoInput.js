import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setText] = useState("");
    const handleInput = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        props.AddToList(inputText);
        setText("");
    };
    return (
        <>
            <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="input-group mb-3 d-flex">
                    <input type="text" className="form-control border-success rounded" value={inputText} onChange={handleInput} placeholder="Enter Task" aria-label="Username" />
                    <button className={`btn btn-success rounded-pill mx-2`} onClick={handleClick}>+</button>
                </div>
            </div>
        </>
    )
}

export default TodoInput
