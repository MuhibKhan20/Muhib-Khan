import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked: " + text);  
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase", "success");
    };

    const handleLoClick = () => {
        console.log("Lowercase was clicked: " + text);  
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase", "success");
    };

    const handleClearClick = () => {
        console.log("Text cleared");
        setText("");
        props.showAlert("Text has been cleared", "success");
    };

    const handleChange = (event) => {
        console.log("On Change"); 
        setText(event.target.value); 
    };
    

    const [text, setText] = useState('');

    return (
        <>
            <div style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="container my-3"  >
                    <div className="mb-3">
                        <textarea 
                            className="form-control" 
                            style={{
                                backgroundColor: props.mode==='dark'?'#333':'#fff', 
                                color: props.mode==='dark'?'white':'black'
                            }}
                            value={text} 
                            onChange={handleChange}  
                            id="myBox" 
                            rows="8"
                        ></textarea>
                        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                        <button className="btn btn-primary my-2  my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                        <button className="btn btn-primary my-2 " onClick={handleClearClick}>Clear Text</button>
                    </div>
                </div>
            </div>
            <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox Above to preview it here"}</p>
            </div>
        </>
    );
}
