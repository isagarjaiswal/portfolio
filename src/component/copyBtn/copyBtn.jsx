import React, { useState } from "react";
import { CopyIcon, ResumeDone } from "../../icons";
import "./copyBtn.scss";

export const CopyBtn = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "sagarjaiswal81555@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((e) => {});
  };

  return (
    <button
      className={`copy-btn ${isCopied ? "copy-btn-click" : ""}`}
      onClick={copyToClipboard}
      aria-label={isCopied ? "Email Copied" : "Copy Email"}
    >
      {isCopied ? (
        <ResumeDone dimension={"18px"} />
      ) : (
        <CopyIcon dimension={"24px"} />
      )}
      {isCopied ? "Email Copied" : "Copy Email"}
    </button>
  );
};
