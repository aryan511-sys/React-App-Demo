import React, { useState } from 'react'
export default function TextForm(props) {
    var [text, setText] = useState("Enter your Text")

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);

    }

    const Upper = () => {
        // console.log("Btn Click");
        let newText = text.toUpperCase()
        setText(newText);
    }

    const Lower = () => {
        // console.log("Btn Click");
        let newText = text.toLowerCase()
        setText(newText);
    }


    const Speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
    }


    const copy = () => {
        var newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const removeSpace = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }

    return (
        <div>
            <div className="m-5 container">
                <h1 className="">{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-outline-info mt-3' onClick={Upper}>Convert To Upper Case</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-info mt-3' onClick={Lower}>Convert To Lower Case</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-info mt-3' onClick={Speak}>Speak</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-info mt-3' onClick={clearText} id='clear'>Clear Text</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-info mt-3' onClick={copy} id='clear'>Copy Text</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-info mt-3' onClick={removeSpace} id='clear'>Remove Extra Text</button>&nbsp;&nbsp;&nbsp;
            </div>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length}Words</p>
                <p>{text.length}Characters</p>
                <p>{0.008 * text.split("").length}Reading Time</p>
                <h3>Previews</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}