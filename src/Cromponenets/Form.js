import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]= useState("Input Your Text");

    const HandleOnChange = (event) => {
        // console.log("On change"); 
        setText(event.target.value)

    }
    
    const uppercase = () => {
        // console.log("Button Click");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowercase = () => {
        // console.log("Button Click");
        let newText = text.toLowerCase();
        setText(newText);
    }


    const speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    } 


    const clear = () => {
        let newText = "";
        setText(newText);
    }

    return (
        <div>
            <div className="container my-5"> 
            <h1>Text Area</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1"  rows="8" value={text} onChange={HandleOnChange}></textarea>
            <button className='btn btn-outline-primary mt-3' onClick={uppercase}>Convert To Upper Care</button>&nbsp;&nbsp;&nbsp;  
            <button className='btn btn-outline-danger mt-3' onClick={lowercase}>Convert To Lower Care</button>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-outline-success mt-3' onClick={speak}>Speak</button>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-outline-info mt-3' onClick={clear}>Clear</button>
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