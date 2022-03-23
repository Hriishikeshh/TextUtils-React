import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClicked = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
      
  }

  const handleLoClicked = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase","success")
      
  }
  const handleClear= ()=>{
    let newText = ''
    setText(newText)
    props.showAlert("Text is cleared","success")        
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  
  return (
    
    <div>
    <div className="container">
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#202020',color:props.mode==='light'?'black':'white'}}></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClicked}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLoClicked}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your Text summary</h2>
      <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
      <p>It takes <b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes to read this text.</p>
      <h2>Preview</h2>
      <p>{text.length===0?"Enter something to preview":(text)}</p>
      
      
    </div>
  </div>
  )
}
 