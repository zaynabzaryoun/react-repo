import React, { useState } from 'react'
import PopupContent from './PopupContent'

const CopyInput = () => {
    const [inputValue, setInputValue] = useState("")
    const [copied, setCopied] = useState(false)
    function handleCopy() {
        navigator.clipboard.writeText(inputValue)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
  return (
      <div>
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
          {copied && <span style={{color: "red", fontSize:"10px"}}> copied! </span>}
          <button onClick={handleCopy}>copy</button>
          <PopupContent copied={copied} />
    </div>
  )
}

export default CopyInput