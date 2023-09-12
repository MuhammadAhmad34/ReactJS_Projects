import { useState } from "react";
import React from 'react'

function CommentsInput(props) {
    const [InputText, setInputText] = useState('Write Your Comment');
    const handleInput = (event) => {
        setInputText(event.target.value);
        console.log(InputText + " Text From Input");
    }
    return (
        <>
            {/* Comments Input  */}
            <div className="comment-badge">
                <div className="input-group mb-3 mt-3">
                    <input type="text" className="form-control" onChange={handleInput} placeholder={InputText} aria-label="Write Your Comment" aria-describedby="button-addon2" />
                    <button className="btn" type="button" onClick={()=>{props.sendMessage(InputText, setInputText("")); }} id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <g clipPath="url(#clip0_46_876)">
                            <path d="M14.8763 1.09851L0.390353 9.45565C-0.175333 9.78069 -0.10345 10.5683 0.45911 10.8058L3.78134 12.1997L12.7604 4.28635C12.9323 4.13321 13.1761 4.36761 13.0292 4.54575L5.50028 13.7186L5.50028 16.2345C5.50028 16.9721 6.391 17.2627 6.82854 16.7283L8.81313 14.3124L12.7073 15.9438C13.1511 16.1314 13.6574 15.8532 13.7387 15.375L15.9889 1.87359C16.0952 1.24227 15.417 0.785973 14.8763 1.09851Z" fill="#6590FF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_46_876">
                                <rect width="16" height="16.0049" fill="white" transform="translate(0 0.997536)" />
                            </clipPath>
                        </defs>
                    </svg></button>
                </div>
            </div>
        </>
    )
}

export default CommentsInput
