import React, { useState } from 'react'
import "./copyBtn.scss"
import { CopyIcon, ResumeDone } from '../../icons';
export const CopyBtn = () => {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = () => {
        const email = "sagarjaiswal81555@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <button className='copy-btn' onClick={copyToClipboard}>
            {isCopied ? <ResumeDone dimension={"18px"} /> : <CopyIcon dimension={"24px"} />}
            {isCopied ? "Email Copied" : "Copy Email"}
        </button>);
};
