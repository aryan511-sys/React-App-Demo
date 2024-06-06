import React,{useState} from 'react'
export default function TextForm(props) {
    var [text , setText] = useState("Enter your Text")

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    
    }

    const handleUpChange = () => {
        // console.log("Btn Click");
        let newText =text.toUpperCase();
        setText(newText);
    }

    return (
        <div>
            <div className="m-5">
                <h1 className="">{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-outline-danger mt-3' onClick={handleUpChange}>Convert To Upper Case</button>
            </div>
        </div>
    )
}
