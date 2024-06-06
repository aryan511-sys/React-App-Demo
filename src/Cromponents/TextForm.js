import React,{useState} from 'react'
export default function TextForm(props) {
    var [text , setText] = useState("Enter your Text")
    return (
        <div>
            <div className="m-5">
                <h1 className="">{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text}></textarea>
                <button className='btn btn-outline-success mt-3'>Convert To Upper Case</button>
            </div>
        </div>
    )
}
